import myFood from './mainPage.js';
import navBar from './sideBar.js';
import getCategory from './Category.js';
import getArea from './Area.js';
import getIngradiants from './ingradiants.js';
import showSearch from './search.js';
import contactUs from './contactUs.js';



$(document).ready(function(){
    myFood("");
    navBar();
    $('.loadingScrean').fadeOut(500,function(){
        $('body').css('overflow','visible');
    })
    
})

getCategory();
getArea();
getIngradiants();
showSearch();
contactUs();







