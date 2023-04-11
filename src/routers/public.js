const express = require('express')
const router = express.Router()
const { VERSION } = require('../config')
const { date_fmt } = require('../utils/datetime_kit')

router.get('/endpoints', function (req, res, next) {
  let list = global.endpoints
  res.json(list)
})

router.get('/api_list', function (req, res, next) {
  let list = global.endpoints
  let api_table = ''
  list.forEach(it => {
    api_table += `<tr>
    <td>${it.path}</td>
    <td>${it.methods}</td>
    <td></td>
    </tr>`
  })
  let html_str = `<html>
<head>
<title>LedWebApi</title>
<style>
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th {
        text-align: left;
        padding: 8px;
      },
      td {
        text-align: left;
        padding: 8px;
        font-size: 12px;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
    </style>
</head>
<body>
    <div>
      <h3>LedWebApi列表详情</h3>
      <table>
        <tr>
          <th>路径</th>
          <th>Method</th>
          <th>备注</th>
        </tr>
      ${api_table}
      </table>
    </div>
  </body>
</html>
`
  res.send(html_str)
})

router.get('/debug', function (req, res, next) {
  res.send(`<html>
<head>
<title>LedWebApi</title>
</head>

<body>
    <p>Welcome, to the LedWebApi.</p>
    <p>Version:${VERSION}</p>
    <p>Now: ${date_fmt()}</p>
    <script type="text/javascript">
      // ==================http================================================
      var http = {};
      http.quest = function (option, callback) {
        var url = option.url;
        var method = option.method;
        var data = option.data;
        var timeout = option.timeout || 0;
        var xhr = new XMLHttpRequest();
        (timeout > 0) && (xhr.timeout = timeout);
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 400) {
              var result = xhr.responseText;
              try { result = JSON.parse(xhr.responseText); } catch (e) { }
              callback && callback(null, result);
            } else {
              callback && callback('status: ' + xhr.status);
            }
          }
        }.bind(this);
        xhr.open(method, url, true);
        if (typeof data === 'object') {
          try {
            data = JSON.stringify(data);
          } catch (e) { }
        }
        xhr.send(data);
        xhr.ontimeout = function () {
          callback && callback('timeout');
          console.log('%c连%c接%c超%c时', 'color:red', 'color:orange', 'color:purple', 'color:green');
        };
      };
      http.get = function (url, callback) {
        var option = url.url ? url : { url: url };
        option.method = 'get';
        this.quest(option, callback);
      };
      http.post = function (option, callback) {
        option.method = 'post';
        this.quest(option, callback);
      };

      ////普通get请求
      //http.get('http://www.baidu.com', function (err, result) {
      //    // 这里对结果进行处理
      //});

      ////定义超时时间(单位毫秒)
      //http.get({ url: 'http://www.baidu.com', timeout: 1000 }, function (err, result) {
      //    // 这里对结果进行处理
      //});

      ////post请求
      //http.post({ url: 'http://www.baidu.com', data: '123', timeout: 1000 }, function (err, result) {
      //    // 这里对结果进行处理
      //});
    </script>
</body>
</html>`)
})

module.exports = router
