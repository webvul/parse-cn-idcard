/**
 * 查询国内身份证号码归属地
 *
 * @author modood <https://github.com/modood>
 */

var fs = require('fs');
var path = require('path');
var zlib = require('zlib');

var node_constellation = require('node-constellation');

// 解析归属地
function parse_area (query_id_number, data_file) {
  var area_id = query_id_number.substr(0, 6);
  var lines = zlib.gunzipSync(fs.readFileSync(data_file)).toString().split('\n');

  for (var i = 0; i < lines.length; i++) {
    var line_array = lines[i].trim().split(',');
    if (area_id === line_array[0]) {
      return {
        id: area_id,
        name: line_array[1]
      };
    }
  };

  return {};
}

// 解析生日和星座
function parse_birthday (query_id_number) {
  var birthday, month, date;
  if (query_id_number.length === 18) {
    birthday = query_id_number.substr(6, 8);
    month = query_id_number.substr(10, 2);
    date = query_id_number.substr(12,2);
  } else if (query_id_number === 15) {
    birthday = '19' + query_id_number.substr(6, 6);
    month = query_id_number.substr(8, 2);
    date = query_id_number.substr(10, 2);
  };
  return {
    date: birthday,
    constellation_cn: node_constellation(month, date, 'zh-cn'),
    constellation_en: node_constellation(month, date, 'en')
  };
}

// 解析性别
function parse_gender (query_id_number) {
  var n;
  if (query_id_number.length === 18) {
    n = query_id_number.substr(16, 1);
  } else if (query_id_number === 15) {
    n = query_id_number.substr(14, 1);
  };
  if (n%2) {
    return {
      cn: '男',
      en: 'Male'
    };
  } else {
    return {
      cn: '女',
      en: 'Female'
    };
  }
}

// 验证是否是正确格式的身份证
function is_id_card (query_id_number)  
{  
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
  return reg.test(query_id_number);
} 

// 解析
function parse (query_id_number) {
  if (!is_id_card(query_id_number)) {
   console.log('Error: id card number not legal!');
   process.exit()
  };

  var result = {
    area: {},
    birthday: {},
    gender: {}
  }
  result.area = parse_area(query_id_number, __dirname + '/data/chinese-id-card-area.data');
  result.birthday= parse_birthday(query_id_number);
  result.gender = parse_gender(query_id_number);

  return result;
}

module.exports = parse;