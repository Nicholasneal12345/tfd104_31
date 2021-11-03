
// 登入和註冊畫面的切換鈕動化
let login_and_register_title_card=document.getElementsByClassName("login_and_register_title_card")[0];
let login_title=document.getElementsByClassName("login_title")[0];
let login_and_register_content_item=document.getElementsByClassName("login_and_register_content_item");
// 點擊header的登入選項後處理跳出的登入和註冊頁面的動畫
let login_li=document.getElementsByClassName("login_li")[0];
let all_div=document.getElementsByClassName("all_div")[0];
let login_and_register_card=document.getElementsByClassName("login_and_register_card")[0];




login_and_register_card.addEventListener("click", ()=>{
    all_div.classList.add("all_div_closed");
    login_and_register_card.classList.add("login_and_register_card_open");  //因為改變document的事件處理器的觸發機制，所以在這邊要重新加回去 
})

login_and_register_title_card.addEventListener("click", (event)=>{
    all_div.classList.add("all_div_closed");
    login_and_register_card.classList.add("login_and_register_card_open");  //因為改變document的事件處理器的觸發機制，所以在這邊要重新加回去 
    for(let i=0; i<login_and_register_content_item.length; i=i+1){
        if(i===0){
            login_and_register_content_item[i].classList.toggle("login_content_card_out");
        }
        else if(i==1){
            login_and_register_content_item[i].classList.toggle("register_content_card");
        }
    }
    login_title.classList.toggle("register_title");
    event.stopPropagation();
    console.log(1, event);
})

document.addEventListener("click", (event)=>{
    if(all_div.className==="all_div all_div_closed"){
        all_div.classList.remove("all_div_closed");
        login_and_register_card.classList.remove("login_and_register_card_open");
    }
}, true)

login_li.addEventListener("click", (event)=>{
    login_and_register_card.classList.add("login_and_register_card_open");
    all_div.classList.add("all_div_closed");
    event.stopPropagation();
    console.log(3, event);
})