/**
 * Created by zhoucaiguang on 2017/2/21.
 */

let request = require('request');
let cheerio = require('cheerio');
let url = require('url');

let Iconv = require('iconv-lite');



export function getData(hrefList:string[]){


    hrefList.forEach((data)=>{

       // console.log(data);
       request(data,{timeOut:5000},(error,response,body)=>{

           if(error)return;
           let $ = cheerio.load(body);
           let companyName = $('.compTitle h1').text();
           let tel = $('.mobMsg a').attr('href');
           let name = $('.mobMsg p span').eq(1).text();
           // console.log(name);
           if(companyName&&tel&&name){
               console.log("公司名称：" + companyName+"   姓名：" + name + "  电话：" + tel );

           }

           // console.log(name);



       })


    });




}