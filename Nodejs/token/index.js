const body_parser = require("body-parser");
const jwt = require("jsonwebtoken");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();


const urlencodedParser = body_parser.urlencoded({
    extended: false
})

app.use(express.static("/static/"));

app.listen(8008, function () {
    console.log("服务器启动");
})

// app.all('*', function (req, res, next) {
//     console.log("收到请求");
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Auth, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     if (req.method == "OPTIONS") {
//         res.sendStatus(200); /*让options请求快速返回*/
//     } else {
//         next();
//     }
// });

/**
 * 跳转重定向
 */
app.get("", function (req, res) {
    console.log("请求路径： /");
    res.redirect("/static/index");
})

/**
 * 返回首页
 */
app.use("/static/index/", function (req, res) {
    console.log("请求路径：/static/index/");
    fs.readFile("./static/index.html", (err, data) => {
        if (!err) {
            console.log("send file...");
            res.end(data);
        }
    })
})






/**
 * 登陆信息验证
 */
app.post("/login", urlencodedParser, function (req, res) {
    console.log(`请求路径  /login/ ${req.body.username}   ${req.body.passwd}`);
    fs.readFile("./users.json", (err, data) => {
        if (!err) {
            let log_ok = false;
            data = data.toString();
            d_json = JSON.parse(data);
            d_json.forEach((value, index) => {
                if (value['name'] == req.body.username && value['passwd'] == req.body.passwd) {
                    console.log(`${req.body.username}: 登陆成功！`);
                    let secret = 'dpkg_token'; // 加密的key
                    let token = jwt.sign(req.body.username, secret, {
                        "expiresIn": 60 * 60 * 24 // 一天的有效时间
                    })
                    res.static(200).json({
                        "code": 0,
                        "msg": "ok",
                        "token": token
                    })
                }
            })
            if (log_ok === false) {
                res.status(200).json({
                    "code": 1,
                    "msg": "wrong passwd of username"
                })
            }
        }
    })
})

/**
 * 返回静态图片
 */
app.get("/static/img/:f_name/", function (req, res) {
    fs.readFile(`./static/img/${req.params.f_name}`, (err, data) => {
        if (!err) {
            res.send(data);
        }
    })
})