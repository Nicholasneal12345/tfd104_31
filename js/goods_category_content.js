
// 處理點擊商品分類選項後的畫面變動
let title=document.getElementsByClassName("title")[0];
let face_left=document.getElementById("face_left");
let head_left=document.getElementById("head_left");
let body_left=document.getElementById("body_left");
let Italy_left=document.getElementById("Italy_left");
let Germany_left=document.getElementById("Germany_left");
let Poland_left=document.getElementById("Poland_left");
let Taiwan_left=document.getElementById("Taiwan_left");
let India_left=document.getElementById("India_left");
let Japan_left=document.getElementById("Japan_left");
let condition_item_unchecked=document.getElementsByClassName("condition_item_unchecked");
// 收尋商品功能
let product_preview_card=document.getElementsByClassName("product_preview_card")[0];
let product_preview_item_img=document.getElementsByClassName("product_preview_item_img");
let input_products_condition=document.getElementsByClassName("input_products_condition")[0];
// 前往商品內頁
let product_preview_item_content_button=document.getElementsByClassName("product_preview_item_content_button");




// 處理點擊商品分類選項後的畫面變動
let products_category_id=localStorage.getItem("products_category_id");
let product_preview_item=document.getElementsByClassName("product_preview_item");

function content(products_category_id){
    if(products_category_id==="face"||products_category_id==="face_h"||products_category_id==="face_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(!product_preview_item[i].className.match("all")
            &&!product_preview_item[i].className.match("face")
            &&!product_preview_item[i].className.match("face_and_head")
            &&!product_preview_item[i].className.match("face_and_body")){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
    else if(products_category_id==="head"||products_category_id==="head_h"||products_category_id==="head_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(!product_preview_item[i].className.match("all")
            &&!product_preview_item[i].className.match("head")
            &&!product_preview_item[i].className.match("face_and_head")
            &&!product_preview_item[i].className.match("head_and_body")){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
    else if(products_category_id==="body"||products_category_id==="body_h"||products_category_id==="body_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(!product_preview_item[i].className.match("all")
            &&!product_preview_item[i].className.match("body")
            &&!product_preview_item[i].className.match("face_and_body")
            &&!product_preview_item[i].className.match("head_and_body")){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
    else if(products_category_id==="Italy"||products_category_id==="Italy_h"||products_category_id==="Italy_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(!product_preview_item[i].className.match("Italy")){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
    else if(products_category_id==="Germany"||products_category_id==="Germany_h"||products_category_id==="Germany_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(!product_preview_item[i].className.match("Germany")){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
    else if(products_category_id==="Poland"||products_category_id==="Poland_h"||products_category_id==="Poland_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(!product_preview_item[i].className.match("Poland")){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
    else if(products_category_id==="Taiwan"||products_category_id==="Taiwan_h"||products_category_id==="Taiwan_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(!product_preview_item[i].className.match("Taiwan")){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
    else if(products_category_id==="India"||products_category_id==="India_h"||products_category_id==="India_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(!product_preview_item[i].className.match("India")){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
    else if(products_category_id==="Japan"||products_category_id==="Japan_h"||products_category_id==="Japan_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(!product_preview_item[i].className.match("Japan")){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
}

function push(products_category_id){
    content(products_category_id);
}

face_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
    for(let i=0; i<condition_item_unchecked.length; i=i+1){
        if(condition_item_unchecked[i].className.match("condition_item_checked")){
            condition_item_unchecked[i].classList.remove("condition_item_checked");
        }
    }
    condition_item_unchecked[0].classList.add("condition_item_checked");
})

head_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
    for(let i=0; i<condition_item_unchecked.length; i=i+1){
        if(condition_item_unchecked[i].className.match("condition_item_checked")){
            condition_item_unchecked[i].classList.remove("condition_item_checked");
        }
    }
    condition_item_unchecked[1].classList.add("condition_item_checked");
})

body_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
    for(let i=0; i<condition_item_unchecked.length; i=i+1){
        if(condition_item_unchecked[i].className.match("condition_item_checked")){
            condition_item_unchecked[i].classList.remove("condition_item_checked");
        }
    }
    condition_item_unchecked[2].classList.add("condition_item_checked");
})

Italy_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
    for(let i=0; i<condition_item_unchecked.length; i=i+1){
        if(condition_item_unchecked[i].className.match("condition_item_checked")){
            condition_item_unchecked[i].classList.remove("condition_item_checked");
        }
    }
    condition_item_unchecked[3].classList.add("condition_item_checked");
})

Germany_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
    for(let i=0; i<condition_item_unchecked.length; i=i+1){
        if(condition_item_unchecked[i].className.match("condition_item_checked")){
            condition_item_unchecked[i].classList.remove("condition_item_checked");
        }
    }
    condition_item_unchecked[4].classList.add("condition_item_checked");
})

Poland_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
    for(let i=0; i<condition_item_unchecked.length; i=i+1){
        if(condition_item_unchecked[i].className.match("condition_item_checked")){
            condition_item_unchecked[i].classList.remove("condition_item_checked");
        }
    }
    condition_item_unchecked[5].classList.add("condition_item_checked");
})

Taiwan_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
    for(let i=0; i<condition_item_unchecked.length; i=i+1){
        if(condition_item_unchecked[i].className.match("condition_item_checked")){
            condition_item_unchecked[i].classList.remove("condition_item_checked");
        }
    }
    condition_item_unchecked[6].classList.add("condition_item_checked");
})

India_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
    for(let i=0; i<condition_item_unchecked.length; i=i+1){
        if(condition_item_unchecked[i].className.match("condition_item_checked")){
            condition_item_unchecked[i].classList.remove("condition_item_checked");
        }
    }
    condition_item_unchecked[7].classList.add("condition_item_checked");
})

Japan_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
    for(let i=0; i<condition_item_unchecked.length; i=i+1){
        if(condition_item_unchecked[i].className.match("condition_item_checked")){
            condition_item_unchecked[i].classList.remove("condition_item_checked");
        }
    }
    condition_item_unchecked[8].classList.add("condition_item_checked");
})

// 收尋商品功能
input_products_condition.addEventListener("change", function(){

    let match_products_count=0;
    let value=new RegExp(this.value, "gi");

    for(let i=0; i<product_preview_item_img.length; i=i+1){
        if(!product_preview_item_img[i].childNodes[1].alt.match(value)){
            product_preview_item[i].style.display="none";
        }
        else if(product_preview_item_img[i].childNodes[1].alt.match(value)){
            product_preview_item[i].style.display="inline-block";
            match_products_count=match_products_count+1;
        }
    }

    if(!match_products_count){
        if(product_preview_card.innerText){
            document.getElementsByClassName("new_element")[0].innerText=`目前沒有收尋到${this.value}的商品`;
        } 
        else{
            product_preview_card.insertAdjacentHTML("afterbegin", `<h1 class="new_element" style= 'color: #d09661'>目前沒有收尋到${this.value}的商品</h1>`);
        } 
    }
    else{
        if(document.getElementsByClassName("new_element")[0]){
            document.getElementsByClassName("new_element")[0].remove();
        }
    }
})

// 前往商品內頁
for(let i=0; i<product_preview_item_content_button.length; i=i+1){
    product_preview_item_content_button[i].addEventListener("click", function(){
        localStorage.setItem("products_id", this.id);
    })
}