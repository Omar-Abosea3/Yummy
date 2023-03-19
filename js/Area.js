import { hideClick } from "./sideBar.js";
import  getSingle  from './single.js';
getSingle
export default function getArea(){
    $('#Area').click(function(){
        $('.foodContainer2').css('display','none');
        $('.foodContainer1').css('display','none');
        $('.foodContainer').css('display','flex');
        $('body').css('overflow','hidden');
        $('.loadingScrean').fadeIn(300 , async function(){
            let x = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
            let res = await x.json();
            let arr = res.meals;
            console.log(arr);
            $('.foodContainer').html('');
            for(let i = 0 ; i < arr.length ;i++){
                $('.foodContainer').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 px-2">
                    <div class="px-2 foodLayer2">                
                        <div class="text-center text-white">
                            <i class="fa-solid w-100 fa-house-laptop fa-4x"></i>
                            <h2 class="w-100">${arr[i].strArea}</h2>
                        </div>
                    </div>

                </div>`)

                $('.foodLayer2').eq(i).click(function(){
                    getMailByArea(arr[i].strArea);
                })
            }
        })
        $('.loadingScrean').fadeOut(300 ,function(){
            $('body').css('overflow','visible');
        });
        hideClick();
    })
}


function getMailByArea(area){
    $('.loadingScrean').fadeIn(300,async function(){
        let x = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        let res = await x.json();
        let arr = res.meals;
        console.log(res);
        console.log(arr);
        $('.foodContainer').html('');
        for(let i = 0 ; i < arr.length ; i++ ){
            $('.foodContainer').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 px-2">
            <figure class="Food rounded rounded-4 overflow-hidden position-relative">
                <img src=${arr[i].strMealThumb} class="w-100" alt="${arr[i].strMeal}">
                <figcaption class="position-absolute text-black px-2 foodLayer top-0 bottom-0 start-0 end-0 bg-light bg-opacity-75">
                    <h3>${arr[i].strMeal}</h3>
                </figcaption>
            </figure>
            </div>`)
        $('.foodLayer').eq(i).click(function(){
            getSingle(arr[i].idMeal)
        })
    }
    })
    $('.loadingScrean').fadeOut(300);
}
