import getSingle from "./single.js";

let arr;
export default async function myFood(str){
    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`);
    let res= await x.json();
    arr = res.meals;
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
}
