
// 漢堡條動畫處理
let hamburger_card=document.getElementsByClassName("hambuger_list")[0];
// getElementsByClassName會回傳符合的dom到一個新的array裡
let line_1=document.getElementsByClassName("line_1")[0];
let line_2=document.getElementsByClassName("line_2")[0];
let line_3=document.getElementsByClassName("line_3")[0];
// 購買按鈕特效
let Recommended_products_button=document.getElementsByClassName("Recommended_products_button");
// 最新消息
let latest_new_item=document.getElementsByClassName("latest_new_item");
let latest_new_date=document.getElementsByClassName("latest_new_date");
let latest_new_content=document.getElementsByClassName("latest_new_content");
// 前往察看按鈕特效
let about_content_button=document.getElementsByClassName("about_content_button")[0];
// 操作流程
let Operation_process_circle_circle1=document.getElementsByClassName("Operation_process_circle_circle1")[0];
let Operation_process_circle_circle2=document.getElementsByClassName("Operation_process_circle_circle2")[0];
let Operation_process_circle_circle3=document.getElementsByClassName("Operation_process_circle_circle3")[0];
let Operation_process_chat_box_chat1=document.getElementsByClassName("Operation_process_chat_box_chat1")[0];
let Operation_process_chat_box_chat2=document.getElementsByClassName("Operation_process_chat_box_chat2")[0];
let Operation_process_chat_box_chat3=document.getElementsByClassName("Operation_process_chat_box_chat3")[0];




// 漢堡條動畫處理
hamburger_card.addEventListener("click", ()=>{
    if(hamburger_card.className==="hambuger_list"){
        hamburger_card.classList.add("hambuger_list_hover");
        line_1.classList.add("rotate_1");
        line_2.classList.add("rotate_2");
        line_3.classList.add("rotate_3");
    }
    else if(hamburger_card.className==="hambuger_list hambuger_list_hover"){
        hamburger_card.classList.remove("hambuger_list_hover");
        line_1.classList.remove("rotate_1");
        line_2.classList.remove("rotate_2");
        line_3.classList.remove("rotate_3");
    }
})

// 推薦商品動畫處理


// 購買按鈕特效
for(let i=0; i<Recommended_products_button.length; i=i+1){
    Recommended_products_button[i].addEventListener("mouseenter", ()=>{
        Recommended_products_button[i].classList.add("Recommended_products_button_hover");
    })
    Recommended_products_button[i].addEventListener("mouseleave", ()=>{
        Recommended_products_button[i].classList.remove("Recommended_products_button_hover");
    })
}

// 最新消息
for(let i=0; i<latest_new_item.length; i=i+1){
    latest_new_item[i].addEventListener("click", ()=>{
        for(let j=0; j<latest_new_item.length; j=j+1){
            if(j!==i){
                if(latest_new_item[j].className==="latest_new_item latest_new_item_open"){
                    latest_new_item[j].classList.remove("latest_new_item_open");
                    latest_new_date[j].classList.remove("latest_new_date_dropdown");
                    latest_new_content[j].classList.remove("latest_new_content_dropup");
                }
                latest_new_item[j].classList.add("latest_new_item_closed");
            }
        }
        latest_new_item[i].classList.toggle("latest_new_item_open");
        latest_new_item[i].classList.remove("latest_new_item_closed");
        latest_new_date[i].classList.toggle("latest_new_date_dropdown");
        latest_new_content[i].classList.toggle("latest_new_content_dropup");

        let all_had_not_open=true;
        for(let j=0; j<latest_new_item.length; j=j+1){
            if(latest_new_item[j].className==="latest_new_item latest_new_item_open"){
                all_had_not_open=false;
            }
        }
        if(all_had_not_open===true){
            for(let j=0; j<latest_new_item.length; j=j+1){
                latest_new_item[j].classList.remove("latest_new_item_closed");
            }
        }
    })
}

// 前往察看按鈕特效
about_content_button.addEventListener("mouseenter", ()=>{
    about_content_button.classList.add("about_content_button_dropdown");
})

about_content_button.addEventListener("mouseleave", ()=>{
    about_content_button.classList.remove("about_content_button_dropdown");
})

// 操作流程
Operation_process_circle_circle1.addEventListener("mouseenter", ()=>{
    Operation_process_chat_box_chat1.classList.add("Operation_process_chat_box_chat_open");
})

Operation_process_circle_circle1.addEventListener("mouseleave", ()=>{
    Operation_process_chat_box_chat1.classList.remove("Operation_process_chat_box_chat_open");
})

Operation_process_circle_circle2.addEventListener("mouseenter", ()=>{
    Operation_process_chat_box_chat2.classList.add("Operation_process_chat_box_chat_open");
})

Operation_process_circle_circle2.addEventListener("mouseleave", ()=>{
    Operation_process_chat_box_chat2.classList.remove("Operation_process_chat_box_chat_open");
})

Operation_process_circle_circle3.addEventListener("mouseenter", ()=>{
    Operation_process_chat_box_chat3.classList.add("Operation_process_chat_box_chat_open");
})

Operation_process_circle_circle3.addEventListener("mouseleave", ()=>{
    Operation_process_chat_box_chat3.classList.remove("Operation_process_chat_box_chat_open");
})