/**
 * Created by zhoucaiguang on 2017/2/21.
 */
"use strict";
var request = require('request');
var cheerio = require('cheerio');
var url = require('url');
var root = 'http://qy.m.58.com/m_entlist/tj/';
var userHref = [];
var downLoad = require('./getUersData');
request(root, { timeout: 5000 }, function (error, response, body) {
    // console.log(body);
    if (error) {
        return;
    }
    // console.log(error);
    // console.log(response);
    // if(response.status)
    var $ = cheerio.load(body);
    // .itemList
    $('.itemList a').each(function (index, data) {
        // console.log(data.attribs);
        var href = url.resolve(root, data.attribs.href);
        userHref.push(href);
    });
    downLoad.getData(userHref);
    // console.log(userHref);
});
