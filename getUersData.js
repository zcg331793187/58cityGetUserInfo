/**
 * Created by zhoucaiguang on 2017/2/21.
 */
"use strict";
var request = require('request');
var cheerio = require('cheerio');
var url = require('url');
var Iconv = require('iconv-lite');
function getData(hrefList) {
    hrefList.forEach(function (data) {
        // console.log(data);
        request(data, { timeOut: 5000 }, function (error, response, body) {
            if (error)
                return;
            var $ = cheerio.load(body);
            var companyName = $('.compTitle h1').text();
            var tel = $('.mobMsg a').attr('href');
            var name = $('.mobMsg p span').eq(1).text();
            // console.log(name);
            if (companyName && tel && name) {
                console.log("公司名称：" + companyName + "   姓名：" + name + "  电话：" + tel);
            }
            // console.log(name);
        });
    });
}
exports.getData = getData;
