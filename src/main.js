/**
import Vue from 'vue'
import $ from 'jquery'
*/
import appRoot from './root.js'
/**
$('#btnShow').on('click', function() {
    var al = $('.alert');
    if(al.is(':hidden')) {
        al.show()
    } else {
        al.hide(); 
    }
})
**/
new appRoot({
    el : '#appRoot'
})
