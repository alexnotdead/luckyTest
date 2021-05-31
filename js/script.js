window.onload = () => {
    
    const form = document.getElementById('form');
    const selectCode = document.querySelector('.select-code__list');
    const arrowsSelect = document.querySelectorAll('.select-code__arrow');
    const codes = document.querySelectorAll('.select-code__link');
    const inputPhone = document.querySelector('.input__phone-num');
    
    codes.forEach((code) =>{
        code.addEventListener(('click'), (e) => {
            e.preventDefault();
            for(i = 0; i < codes.length; i++){
                if(codes[i] != e.currentTarget){
                    codes[i].style.order = '1';    
                    codes[i].classList.add('none'); 
                    arrowsSelect[i].classList.remove('active');
                }else{
                    e.currentTarget.style.order = '-1';    
                    codes[i].classList.remove('none');  
                    selectCode.classList.toggle('active');
                    if(selectCode.classList.contains('active')) arrowsSelect[i].classList.add('active');
                    else {
                        arrowsSelect[i].classList.remove('active');
                        
                        if(codes[i].getAttribute("href").replace('#', '') == 'RU' || codes[i].getAttribute("href").replace('#', '') == 'KZ'){
                            inputPhone.value = '+7 ';
                        }else if(codes[i].getAttribute("href").replace('#', '') == 'BL'){
                            inputPhone.value = '+375 ';
                        }else if(codes[i].getAttribute("href").replace('#', '') == 'UA'){
                            inputPhone.value = '+380 ';
                        }else if(codes[i].getAttribute("href").replace('#', '') == 'LV'){
                            inputPhone.value = '+371 ';
                        }
                    }
                }
            }
            selectCode.scrollTo(0, -(selectCode.scrollHeight)) 
        })
    })
    
    document.querySelectorAll(".form__input")
    .forEach((input) => {
        input.onclick = (e) => {
            if(!input.classList.contains('active')){
                if(input.classList.contains('input__phone-num')){
                   console.log(input.value.indexOf("\ ")) 
                   input.value = input.value.substring(0,input.value.indexOf("\ "));
                   input.classList.add('active')
                }else{
                    input.value = ""; 
                    input.classList.add('active')         
                }
                
            }
        };
    });    
   
    
}