/**
 * Created by zhoucaiguang on 2017/2/21.
 */

let request = require('request');
let cheerio = require('cheerio');
let url = require('url');
let root:string = 'http://qy.m.58.com/m_entlist/tj/';
let userHref = [];
import * as downLoad from './getUersData';

request(root,{timeout:5000},(error,response,body)=>{


    // console.log(body);
    if(error){return;}

    // console.log(error);
    // console.log(response);
    // if(response.status)
    let $ = cheerio.load(body);
    // .itemList
    $('.itemList a').each(function (index,data) {

        // console.log(data.attribs);
        let href = url.resolve(root, data.attribs.href);
        userHref.push(href);
    });
    downLoad.getData(userHref);
    // console.log(userHref);
});