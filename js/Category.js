import { hideClick} from './sideBar.js';
import  getSingle  from './single.js';
export default function getCategory(){
    let arr;

    $('#Categories').click(function(){
        $('body').css('overflow','hidden');
        $('.foodContainer2').css('display','none');
        $('.loadingScrean').fadeIn(300 , async function(){
            let x = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            let res = await x.json();
            arr = res.categories;
            console.log(arr);
            $('.foodContainer').html('');
            for( let i = 0; i < arr.length ; i++){
                $('.foodContainer').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 px-2">
                <figure class="Food rounded rounded-4 overflow-hidden position-relative">
                    <img src=${arr[i].strCategoryThumb} class="w-100" alt="${arr[i].strCategory}">
                    <figcaption class="position-absolute text-center text-black px-2 foodLayer1 top-0 bottom-0 start-0 end-0 bg-light bg-opacity-75">
                        <h3 class="w-100">${arr[i].strCategory}</h3>
                        <p class="w-100">${arr[i].strCategoryDescription.split(' ').slice(0,20).join(" ")}</p>
                    </figcaption>
                </figure>
                </div>`)
                $('.foodLayer1').eq(i).click(function(){
                    getCategoryOfMeals(arr[i].strCategory)
                    
                })
            }
        })
        $('.loadingScrean').fadeOut(300,function(){
            $('body').css('overflow','visible');
        });
        hideClick();
    })
}

function getCategoryOfMeals(cat){
    $('.loadingScrean').fadeIn(300 , async function(){
        let x = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
        let res = await x.json();
        let arr = res.meals;
        console.log(arr);
        $('.foodContainer').html('');
        for( let i = 0; i < arr.length ; i++){
            $('.foodContainer').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-3 px-2">
            <figure class="Food rounded rounded-4 overflow-hidden position-relative">
                <img src=${arr[i].strMealThumb} class="w-100" alt="${arr[i].strMeal}">
                <figcaption class="position-absolute text-start text-black px-2 foodLayer1 top-0 bottom-0 start-0 end-0 bg-light bg-opacity-75">
                    <h3 class="w-100">${arr[i].strMeal}</h3>
                </figcaption>
            </figure>
            </div>`)
            $('.foodLayer1').eq(i).click(function(){
                getSingle(arr[i].idMeal)
            })
        }
    })
    $('.loadingScrean').fadeOut(300);
}