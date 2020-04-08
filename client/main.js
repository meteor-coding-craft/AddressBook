
/*1.10*/
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../lib/checkPatterns.js';
import '../lib/collection.js';

import './main.html';

import './addressList.html';
import './addressList.js';
/*1.10*/

//클라이언트 콘솔 브라우저에서 호출하여 데이터를 내꺼로 만들자
//Meteor.call("makeFixtureData",Meteor.userId(),function(err,result){ console.log(result); });

