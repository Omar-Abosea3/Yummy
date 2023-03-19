import { hideClick } from "./sideBar.js";
import getSingle from "./single.js";

export default function showSearch(){
    $('#Search').click(function(){
        $('.foodContainer1').html('');
        $('.foodContainer2').html('');
        $('.foodContainer').css('display','flex');
        $('body').css('overflow','hidden');
        $('.foodContainer').html('').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
        <div class="px-2">                
        <input id="searchName" type="text" class="form-control text-white bg-black" placeholder="Search By Name">
        </div>

        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
        <div class="px-2">                
        <input id="searchLetter" maxlength="1" type="text" class="form-control text-white bg-black" placeholder="Search By First Letter">
        </div>

        </div>`);
        hideClick();
        $('#searchName').keyup(function(e){
            let mealName = e.target.value;
            console.log(mealName);
            if(mealName != ''){
                searchName(mealName);
            }
        })
        $('#searchLetter').keyup(function(e){
            let mealLetter = e.target.value;
            if(mealLetter != ''){
                searchLetter(mealLetter);
            }
        })

    })
}

function searchName(name){
    $('body').css('overflow','hidden');
    $('.loadingScrean').fadeIn(300 , async function(){
        let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        let res = await x.json();
        let arr = res.meals;
        console.log(arr);
        if(arr != null){
            $('.foodContainer1').css('display','flex').html('');
            for(let i = 0 ; i < arr.length ; i++ ){
                $('.foodContainer1').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 px-2">
                <figure class="Food rounded rounded-4 overflow-hidden position-relative">
                    <img src=${arr[i].strMealThumb} class="w-100" alt="${arr[i].strMeal}">
                    <figcaption class="position-absolute text-black px-2 foodLayer top-0 bottom-0 start-0 end-0 bg-light bg-opacity-75">
                        <h3>${arr[i].strMeal}</h3>
                    </figcaption>
                </figure>
                </div>`)
                $('.foodLayer').eq(i).click(function(){
                    $('.foodContainer1').html('');
                    getSingle(arr[i].idMeal);
                })
            }
        }else{
            $('.foodContainer1').html('');
        }
    })
    $('.loadingScrean').fadeOut(300 ,function(){
        $('body').css('overflow','visible')
    });
}

function searchLetter(letter){
    $('body').css('overflow','hidden');
    $('.loadingScrean').fadeIn(300 , async function(){
        let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        let res = await x.json();
        let arr = res.meals;
        console.log(arr);
        $('.foodContainer1').css('display','flex').html('');
        for(let i = 0 ; i < arr.length ; i++ ){
            $('.foodContainer1').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 px-2">
            <figure class="Food rounded rounded-4 overflow-hidden position-relative">
                <img src=${arr[i].strMealThumb} class="w-100" alt="${arr[i].strMeal}">
                <figcaption class="position-absolute text-black px-2 foodLayer top-0 bottom-0 start-0 end-0 bg-light bg-opacity-75">
                    <h3>${arr[i].strMeal}</h3>
                </figcaption>
            </figure>
            </div>`)
            $('.foodLayer').eq(i).click(function(){
                $('.foodContainer1').html('');
                getSingle(arr[i].idMeal)
            })
        }
    })
    $('.loadingScrean').fadeOut(300 ,function(){
        $('body').css('overflow','visible')
    });
}

