# parse-cn-idcard

解析中国身份证号码（地址，性别，生日，星座），支持 18 位和 15 位身份证

## Installation

`$ npm install --save parse-cn-idcard`

or:

`$ npm install -g parse-cn-idcard`

## Usage

-   api

    ```javascript
    var parse_id = require('node-constellation');

    var result = parse_id('110000199409181234');
    console.log(result)
    ```
    ```
    {
        area: {
            id: '110000',
            name: '北京市'
        },
        birthday: {
            date: '19940918',
            constellation_cn: '处女座',
            constellation_en: 'Virgo'
        },
        gender: {
            cn: '男',
            en: 'Male'
        }
    }
    ```

-   cli

    ```
    Usage: parse-id [options]

    Options:

      -h, --help     output usage information
      -V, --version  output the version number

    Usage:

      $ parse-id [idcard number]    查询特定的身份证号码

    Examples:

      $ parse-id 110000200808081234

    ```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).