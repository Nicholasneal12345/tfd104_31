
// 處理點擊價格或標題會展開選擇條件列
let goods_selection_condition_title1=document.getElementsByClassName("goods_selection_condition_title1")[0];
let goods_selection_condition_title1_unchecked=document.getElementsByClassName("goods_selection_condition_title1_unchecked")[0];
let goods_selection_condition_title2=document.getElementsByClassName("goods_selection_condition_title2")[0];
let goods_selection_condition_title2_unchecked=document.getElementsByClassName("goods_selection_condition_title2_unchecked")[0];
// 處理checkbox點擊
let goods_selection_selected_condition_item=document.getElementsByClassName("goods_selection_selected_condition_item");
let goods_selection_price_checkbox=document.getElementsByClassName("goods_selection_price_checkbox");
let price_checkbox_title=document.getElementsByClassName("price_checkbox_title");
let goods_selection_mood_checkbox=document.getElementsByClassName("goods_selection_mood_checkbox");
let mood_checkbox_title=document.getElementsByClassName("mood_checkbox_title");




// 處理點擊價格或標題會展開選擇條件列
goods_selection_condition_title1.addEventListener("click", ()=>{
    goods_selection_condition_title1_unchecked.classList.toggle("goods_selection_condition_title1_checked");
})

goods_selection_condition_title2.addEventListener("click", ()=>{
    goods_selection_condition_title2_unchecked.classList.toggle("goods_selection_condition_title2_checked");
})

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