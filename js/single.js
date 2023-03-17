export default function getSingle(id){
    $('.loadingScrean').fadeIn(300 , async function(){
    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let res = await x.json();
    let arr = res.meals;
    $('.foodContainer1').html('');
    $('.foodContainer2').css('display','none');
    $('.foodContainer').html("").append(`<div class="col-12 col-sm-12 col-md-12 col-lg-4 px-2">
    <figure class="Food rounded rounded-4 overflow-hidden">
        <img src=${arr[0].strMealThumb} class="w-100" alt="${arr[0].strMeal}">
        <figcaption class="text-white mt-2 px-2 ">
            <h3>${arr[0].strMeal}</h3>
        </figcaption>
    </figure>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-8 px-2 text-white">
    <div>
        <h2 class="fw-bold">Instructions.</h2>
        <p class="fs-6 fw-light mb-4">${arr[0].strInstructions}</p>
        <h2 class="fw-bold fs-3">Area : ${arr[0].strArea}</h2>
        <h2 class="fw-bold fs-3">Category : ${arr[0].strCategory}</h2>
        <h2 class="fw-bold fs-3">Recipes : 
            <ul class="Recipes list-unstyled pt-3">

            </ul>
        </h2>
        <h2>Tags : 
            <ul class="Tags list-unstyled pt-3">
        
            </ul>
        </h2>
        <div class="clas">
            <a href="${arr[0].strSource}" target="_blank" class="btn btn-success">Source</a>
            <a href="${arr[0].strYoutube}" target="_blank" class="btn btn-danger">Youtube</a>
        </div>
    </div>
    </div>`)
    let newArr = [arr[0].strMeasure1,arr[0].strMeasure2,arr[0].strMeasure3,arr[0].strMeasure4,arr[0].strMeasure5,arr[0].strMeasure6,arr[0].strMeasure7,arr[0].strMeasure8,arr[0].strMeasure9,arr[0].strMeasure10,arr[0].strMeasure11,arr[0].strMeasure12,arr[0].strMeasure13,arr[0].strMeasure14,arr[0].strMeasure15,arr[0].strMeasure16,arr[0].strMeasure17,arr[0].strMeasure18,arr[0].strMeasure19,arr[0].strMeasure20];
    let newArr2= [arr[0].strIngredient1,arr[0].strIngredient2,arr[0].strIngredient3,arr[0].strIngredient4,arr[0].strIngredient5,arr[0].strIngredient6,arr[0].strIngredient7,arr[0].strIngredient8,arr[0].strIngredient9,arr[0].strIngredient10,arr[0].strIngredient11,arr[0].strIngredient12,arr[0].strIngredient13,arr[0].strIngredient14,arr[0].strIngredient15,arr[0].strIngredient16,arr[0].strIngredient17,arr[0].strIngredient18,arr[0].strIngredient19,arr[0].strIngredient20]
    for(let i = 0 ; i < 20 ; i++){
        if(newArr[i] != ' ' && newArr2[i] != ' '){
            $('.Recipes').append(`<li class="px-3">${newArr[i]+' '+newArr2[i]}</li>`)
        }else if(newArr[i] != "" && newArr2[i] != ""){
            $('.Recipes').append(`<li class="px-3">${newArr[i]+' '+newArr2[i]}</li>`)
        }
    }

    if(arr[0].strTags != null){
        if(arr[0].strTags.length != 0){
            let arrStr = arr[0].strTags.split(',');
            for( let i = 0 ; i < arrStr.length ; i++){
                $('.Tags').append(`<li class="px-3">${arrStr[i]}</li>`);
            }
        }else{
            $('.Tags').html(`<li class="px-3">${arr[0].strTags}</li>`)
        }
    }
        
    });
    $('.loadingScrean').fadeOut(300);
}
