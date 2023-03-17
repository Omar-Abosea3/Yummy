import { hideClick } from "./sideBar.js";

let nameRegEx= /^[a-zA-Z ]+$/;

let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let phonRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

let ageRegEx = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

let passwordRegEx = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;

export default function contactUs(){
    $('#Contact').click(function(){
        $('.foodContainer2').css('display','flex');
        $('body').css('overflow','hidden');
        $('.foodContainer').html('');
        $('.foodContainer1').html('');
        $('.loadingScrean').fadeIn(300 , function(){
            $('.foodContainer2').html(`<div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id="myName" type="text" class="form-control myInputs text-white bg-black" placeholder="Enter Your Name">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterName"></div>
            </div>
    
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id='myEmail' type="email" class="form-control myInputs text-white bg-black" placeholder="Enter Your Email">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterEmail"></div>
            </div>
            </div>

            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id="myPhone" type="text" class="form-control myInputs text-white bg-black" placeholder="Enter Your Phone">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterPhone"></div>
            </div>
            </div>
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id="myAge" type="number" class="form-control myInputs text-white bg-black" placeholder="Enter Your Age">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterAge"></div>
            </div>
            </div>
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id="myPassword" type="password" class="form-control myInputs text-white bg-black" placeholder="Enter Your Password">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterPassword"></div>
            </div>
            </div>
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2">                
            <input id="myRepassword" type="password" class="form-control myInputs text-white bg-black" placeholder="RePassword">
            <div class="w-100 text-black mt-2 py-3 text-center rounded rounded-3" id="afterRepassword"></div>
            </div>
            </div>
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 px-2">
            <div class="px-2 text-center">                
            <button id="MyBtn" class="myBtn px-3 rounded rounded-3 py-2">submit</button>
            </div>
            </div>`)
            $('#myName').keyup(function(){
                nameResult();
            })
            $('#myEmail').keyup(function(){
                emailResult();
            })
            $('#myPhone').keyup(function(){
                phoneResult();
            })
            $('#myAge').keyup(function(){
                ageResult();
            })
            $('#myPassword').keyup(function(){
                passwordResult();
            })
            $('#myRepassword').keyup(function(){
                rePasswordResult();
            })
        })
        $('.loadingScrean').fadeOut(300,function(){
            $('body').css('overflow','visible');
        });

        hideClick();
    })
}

function writeInformation(){
    if(nameValidation() && emailValidation() && phoneValidation() && ageValidation() && passwordValidation() && repasswordValidation()){
        $('#MyBtn').removeClass('myBtn').addClass('myBtn1');
        $('#afterName').removeClass('bg-danger');
        $('#afterEmail').removeClass('bg-danger');
        $('#afterPhone').removeClass('bg-danger');
        $('#afterAge').removeClass('bg-danger');
        $('#afterPassword').removeClass('bg-danger');
        $('#afterRepassword').removeClass('bg-danger');
    }else{
        $('#MyBtn').removeClass('myBtn1').addClass('myBtn');
    }
}
function nameResult(){
    if(nameValidation() != true){
        $('#afterName').html('Special characters and numbers not allowed').addClass('bg-danger');
    }else{
        $('#afterName').html('').removeClass('bg-danger');
    }
    writeInformation();
}

function emailResult(){
    if(emailValidation() != true){
        $('#afterEmail').html('Email not valid *exemple@yyy.zzz').addClass('bg-danger');
    }else{
        $('#afterEmail').html('').removeClass('bg-danger');
    }
    writeInformation();
}

function phoneResult(){
    if(phoneValidation() != true){
        $('#afterPhone').html('Enter valid Phone Number').addClass('bg-danger');
    }else{
        $('#afterPhone').html('').removeClass('bg-danger');
    }
    writeInformation();
}
function ageResult(){
    if(ageValidation() != true){
        $('#afterAge').html('Enter valid age').addClass('bg-danger');
    }else{
        $('#afterAge').html('').removeClass('bg-danger');
    }
    writeInformation();
}
function passwordResult(){
    if(passwordValidation() != true){
        $('#afterPassword').html('Enter valid password *Minimum eight characters, at least one letter and one number:*').addClass('bg-danger');
    }else{
        $('#afterPassword').html('').removeClass('bg-danger');
    }
    writeInformation();
}

function rePasswordResult(){
    if(repasswordValidation() != true){
        $('#afterRepassword').html('Enter valid repassword').addClass('bg-danger');
    }else{
        $('#afterRepassword').html('').removeClass('bg-danger');
    }
    writeInformation();
}

function nameValidation(){
    return nameRegEx.test($('#myName').val());
}

function emailValidation(){
    return emailRegEx.test($('#myEmail').val());
}

function phoneValidation(){
    return phonRegEx.test($('#myPhone').val());
}

function ageValidation(){
    return ageRegEx.test($('#myAge').val());
}

function passwordValidation(){
    return passwordRegEx.test($('#myPassword').val());
}

function repasswordValidation(){
    return $('#myRepassword').val() == $('#myPassword').val();
}
