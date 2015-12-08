/**
 * 单元测试
 *
 * @author modood <https://github.com/modood>
 */

var should = require('should');
var parse = require('../index');


describe('parse-cn-idcard', function () {

  it('parse()', function () {
    parse(110105199410221234).should.eql({area: {id: '110105', name: '北京市朝阳区'}, birthday: {date: '19941022', constellation_cn: '天秤座', constellation_en: 'Libra'}, gender: {cn: '男', en: 'Male'} });
    parse('110105199410221234').should.eql({area: {id: '110105', name: '北京市朝阳区'}, birthday: {date: '19941022', constellation_cn: '天秤座', constellation_en: 'Libra'}, gender: {cn: '男', en: 'Male'} });
    parse(110105941022321).should.eql({area: {id: '110105', name: '北京市朝阳区'}, birthday: {date: '19941022', constellation_cn: '天秤座', constellation_en: 'Libra'}, gender: {cn: '男', en: 'Male'} });
    parse('110105941022321').should.eql({area: {id: '110105', name: '北京市朝阳区'}, birthday: {date: '19941022', constellation_cn: '天秤座', constellation_en: 'Libra'}, gender: {cn: '男', en: 'Male'} });
  });

});