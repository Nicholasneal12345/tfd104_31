
// 處理checkbox點擊
let goods_selection_selected_condition_item=document.getElementsByClassName("goods_selection_selected_condition_item");
let goods_selection_price_checkbox=document.getElementsByClassName("goods_selection_price_checkbox");
let price_checkbox_title=document.getElementsByClassName("price_checkbox_title");
let goods_selection_mood_checkbox=document.getElementsByClassName("goods_selection_mood_checkbox");
let mood_checkbox_title=document.getElementsByClassName("mood_checkbox_title");
// 處理router
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
let all_products_categort_button_left=[face_left, head_left, body_left, Italy_left, Germany_left, Poland_left, Taiwan_left, India_left, Japan_left];




// 處理checkbox點擊
for(let i=0; i<goods_selection_price_checkbox.length; i=i+1){
    goods_selection_price_checkbox[i].addEventListener("click", (event)=>{
        goods_selection_selected_condition_item[i].classList.toggle("goods_selection_selected_condition_item_open");
        goods_selection_price_checkbox[i].classList.toggle("goods_selection_price_checkbox_checked");
        console.log(123)
        event.stopPropagation();
    })

    price_checkbox_title[i].addEventListener("click", (event)=>{
        goods_selection_selected_condition_item[i].classList.toggle("goods_selection_selected_condition_item_open");
        goods_selection_price_checkbox[i].classList.toggle("goods_selection_price_checkbox_checked");
        event.stopPropagation();
    })
}

for(let i=0; i<goods_selection_mood_checkbox.length; i=i+1){
    goods_selection_mood_checkbox[i].addEventListener("click", (event)=>{
        goods_selection_selected_condition_item[i+2].classList.toggle("goods_selection_selected_condition_item_open");
        goods_selection_mood_checkbox[i].classList.toggle("goods_selection_mood_checkbox_checked");
        console.log(123)
        event.stopPropagation();
    })

    mood_checkbox_title[i].addEventListener("click", (event)=>{
        goods_selection_selected_condition_item[i+2].classList.toggle("goods_selection_selected_condition_item_open");
        goods_selection_mood_checkbox[i].classList.toggle("goods_selection_mood_checkbox_checked");
        event.stopPropagation();
    })
}

// 點擊刪除已篩選的條件
for(let i=0; i<goods_selection_selected_condition_item.length; i=i+1){
    goods_selection_selected_condition_item[i].addEventListener("click", ()=>{
        goods_selection_selected_condition_item[i].classList.remove("goods_selection_selected_condition_item_open");
        if(i<2){
            goods_selection_price_checkbox[i].classList.remove("goods_selection_price_checkbox_checked"); 
        }
        else if(i>=2&&i<4){
            goods_selection_mood_checkbox[i-2].classList.remove("goods_selection_mood_checkbox_checked");
        }
    })
}

// 處理router
let products_category_id=localStorage.getItem("products_category_id");
let product_preview_item=document.getElementsByClassName("product_preview_item");

function content(products_category_id){
    if(products_category_id==="face"||products_category_id==="face_h"||products_category_id==="face_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(product_preview_item[i].className!=="product_preview_item all"
            &&product_preview_item[i].className!=="product_preview_item face"
            &&product_preview_item[i].className!=="product_preview_item face_and_head"
            &&product_preview_item[i].className!=="product_preview_item face_and_body"){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
    else if(products_category_id==="head"||products_category_id==="head_h"||products_category_id==="head_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(product_preview_item[i].className!=="product_preview_item all"
            &&product_preview_item[i].className!=="product_preview_item head"
            &&product_preview_item[i].className!=="product_preview_item face_and_head"
            &&product_preview_item[i].className!=="product_preview_item head_and_body"){
                product_preview_item[i].style.display="none";
            }
            else{
                product_preview_item[i].style.display="inline-block";
            }
        }
    }
    else if(products_category_id==="body"||products_category_id==="body_h"||products_category_id==="body_left"){
        for(let i=0; i<product_preview_item.length; i=i+1){
            if(product_preview_item[i].className!=="product_preview_item all"
            &&product_preview_item[i].className!=="product_preview_item body"
            &&product_preview_item[i].className!=="product_preview_item face_and_body"
            &&product_preview_item[i].className!=="product_preview_item head_and_body"){
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
    window.history.pushState({products_category_id}, `${products_category_id}`, `/html/goods_category_all.html/${products_category_id}`);
}

face_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
})

head_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
})

body_left.addEventListener("click", function(){
    localStorage.setItem("products_category_id", this.id);
    products_category_id=localStorage.getItem("products_category_id");
    push(products_category_id);
})