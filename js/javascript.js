"use strict";

let Sepet = 1;



const sepet = function(){
    for (let i = 0; i<1; i++){
        document.querySelector(".shop-car").addEventListener('click', function(){
            if (Sepet<11){
                document.querySelector(".cart-badge").textContent = Sepet++;
            }
            else{
                console.log("Enessssssss");
            }
        });
    }
}

sepet();