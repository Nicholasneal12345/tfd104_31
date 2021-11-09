
// 購買按鈕特效
let Recommended_products_button=document.getElementsByClassName("Recommended_products_button");
// let index_to_products_content=document.getElementsByClassName("index_to_products_content");
// 最新消息
let latest_new_item=document.getElementsByClassName("latest_new_item");
let latest_new_date=document.getElementsByClassName("latest_new_date");
let latest_new_content=document.getElementsByClassName("latest_new_content");
// 前往察看按鈕特效
let about_content_button=document.getElementsByClassName("about_content_button")[0];
// 操作流程
let Operation_process_chat_box_chat=document.getElementsByClassName("Operation_process_chat_box_chat");
let Operation_process_card=document.getElementsByClassName("Operation_process_card")[0];
let Operation_process_title_line_line=document.getElementsByClassName("Operation_process_title_line_line")[0];
console.log(window.innerWidth);
console.log(window.outerWidth);


// 購買按鈕特效以及購買功能
for(let i=0; i<Recommended_products_button.length; i=i+1){
    Recommended_products_button[i].addEventListener("mouseenter", ()=>{
        Recommended_products_button[i].classList.add("Recommended_products_button_hover");
    })
    Recommended_products_button[i].addEventListener("mouseleave", ()=>{
        Recommended_products_button[i].classList.remove("Recommended_products_button_hover");
    })
}

for(let i=0; i<Recommended_products_button.length; i=i+1){
    Recommended_products_button[i].addEventListener("click", function(){
        console.log(this.id);
        localStorage.setItem("products_id", Recommended_products_button[i].id);
    }, true)
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
window.addEventListener("scroll", function(){
    if(window.scrollY>=Operation_process_card.offsetTop-100){
        for(let i=0; i<Operation_process_chat_box_chat.length; i=i+1){
            Operation_process_chat_box_chat[i].classList.add("Operation_process_chat_box_chat_open");
        }
        Operation_process_title_line_line.classList.add("Operation_process_title_line_line_down");
    }
    else{
        for(let i=0; i<Operation_process_chat_box_chat.length; i=i+1){
            Operation_process_chat_box_chat[i].classList.remove("Operation_process_chat_box_chat_open");
        }
        Operation_process_title_line_line.classList.remove("Operation_process_title_line_line_down");
    }
})