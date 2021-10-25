
// 商品內文圖片放大效果
let products_img=document.getElementsByClassName("products_img")[0];
// 商品數量選擇
let products_count_select_card=document.getElementsByClassName("products_count_select_card")[0];
let products_count_input=document.getElementsByClassName("products_count_input")[0];
let now_count=document.getElementsByClassName("now_count")[0];
let is_count_correct=false;
// 商品購買按鈕特效
let products_buy_button=document.getElementsByClassName("products_buy_button")[0];




// 商品內文圖片放大效果
products_img.addEventListener("mouseenter", ()=>{
    products_img.classList.add("products_img_hover");
})

products_img.addEventListener("mousemove", function(event){
    let rect=this.getBoundingClientRect();
    let x=event.offsetX/rect.width;
    let y=event.offsetY/rect.width;
    this.style.setProperty("--x", x);
    this.style.setProperty("--y", y);
    products_img.classList.add("products_img_mousemove");
})

products_img.addEventListener("mouseleave", ()=>{
    products_img.classList.remove("products_img_hover", "products_img_mousemove");
})

// 商品數量選擇
// 處理輸入的部分
products_count_input.addEventListener("change", function(){
    
    // 先reset清單選項
    for(let i=0; i<products_count_select_card.children.length; i=i+1){
        products_count_select_card.children[i].setAttribute("selected", false);
    }

    // 判斷輸入的選項是反有符合的選項內的內容
    for(let i=0; i<products_count_select_card.children.length; i=i+1){
        if(this.value===products_count_select_card.children[i].innerHTML){
            products_count_select_card.children[i].setAttribute("selected", true);
            is_count_correct=true;
            now_count.innerHTML=`您目前已選擇：${this.value}`;
            return;
        }else{
            is_count_correct=false;
        }
    }

    if(!is_count_correct){
        now_count.innerHTML=`您目前選擇的${this.value}數量不符合庫存數量，請再重新選擇一次！`;
    }
})

// 處理下拉的部分
for(let i=0; i<products_count_select_card.children.length; i=i+1){
    products_count_select_card.children[i].addEventListener("change", function(){
        now_count.innerHTML=`您目前已選擇：${this.value}`;
        console.log(123)
    })
}

products_count_select_card.addEventListener("change", ()=>{
    now_count.innerHTML=`您目前已選擇：${products_count_select_card.value}`;
})

// 商品購買按鈕特效
products_buy_button.addEventListener("mouseenter", ()=>{
    products_buy_button.classList.add("products_buy_button_hover");
})

products_buy_button.addEventListener("mouseleave", ()=>{
    products_buy_button.classList.remove("products_buy_button_hover");
})