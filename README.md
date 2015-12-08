# parse-cn-idcard

解析中国身份证号码（地址，性别，生日，星座），支持 18 位和 15 位身份证

[![Deps](https://david-dm.org/modood/parse-cn-idcard.svg)](https://david-dm.org/modood/parse-cn-idcard) 
[![npm](https://img.shields.io/npm/v/parse-cn-idcard.svg)](https://www.npmjs.com/package/parse-cn-idcard)
[![npm](https://img.shields.io/npm/dt/parse-cn-idcard.svg)](https://www.npmjs.com/package/parse-cn-idcard)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/modood/parse-cn-idcard/master/LICENSE)

## Installation

`$ npm install --save parse-cn-idcard`

or

`$ npm install -g parse-cn-idcard`

## Test

`$ npm test`

## Usage

### api

```javascript
var parse_id = require('parse-cn-idcard');

var result = parse_id('110105199410221234');

console.log(result);
```
```
{
    area: {
        id: '110105',
        name: '北京市朝阳区'
    },
    birthday: {
        date: '19941022',
        constellation_cn: '天秤座',
        constellation_en: 'Libra'
    },
    gender: {
        cn: '男',
        en: 'Male'
    }
}
```

### cli

```
Usage: parse-id [options]

Options:

  -h, --help     output usage information
  -V, --version  output the version number

Usage:

  $ parse-id [idcard number]    查询特定的身份证号码

Examples:

  $ parse-id 110105199410221234

```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

this repo is released under the [MIT License](http://www.opensource.org/licenses/MIT).
