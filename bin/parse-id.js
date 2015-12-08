#!/usr/bin/env node

var program = require('commander');

program
  .version('0.1.1')
  .parse(process.argv);

program.on('--help', function(){
  console.log('  Usage:');
  console.log('');
  console.log('    $ parse-id [idcard number]    查询特定的身份证号码')
  console.log('');
  console.log('  Examples:');
  console.log('');
  console.log('    $ parse-id 110105199410221234');
  console.log('');
});

if(program.args.length >0 ){
  var result = require('../index')(program.args[0]);
  
  if (result) {
    console.log('性别：' + result.gender.cn);
    console.log('星座：' + result.birthday.constellation_cn);
    console.log('生日：' + result.birthday.date);
    console.log('地区：' + result.area.name);
  };
} else {
  program.outputHelp();
}
