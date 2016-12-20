/**
import Vue from 'vue'
import $ from 'jquery'
*/
import appRoot from './root'
import {validator} from 'plugins'
import Vue from 'vue'
/**
 * @function
 * @desc 初始化应用程序，此方法主要用于测试，请勿调用
 */
 export function init() {
   Vue.use(validator)
   new appRoot({
       el : '#appRoot'
   })
 }
