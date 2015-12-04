/**
 * 压缩 CSV 数据库
 *
 * @author modood <https://github.com/modood>
 */

var fs = require('fs');
var path = require('path');
var zlib = require('zlib');


function save_compress_file (source, target) {
  var data = fs.readFileSync(source);
  fs.writeFileSync(target, zlib.gzipSync(data));
}

save_compress_file(path.resolve(__dirname, '../data/chinese-id-card-area.csv'), path.resolve(__dirname, '../data/chinese-id-card-area.data'));
