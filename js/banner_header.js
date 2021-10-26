
// 處理header按過後的事件處理
let header_li_a=document.getElementsByClassName("header_li_a");
// 漢堡條動畫處理
let hamburger_card=document.getElementsByClassName("hambuger_list")[0];
// getElementsByClassName會回傳符合的dom到一個新的array裡
let line_1=document.getElementsByClassName("line_1")[0];
let line_2=document.getElementsByClassName("line_2")[0];
let line_3=document.getElementsByClassName("line_3")[0];
let hamburger_content=document.getElementsByClassName("hamburger_content")[0];
let left_ul_fixed=document.getElementsByClassName("left_ul")[0];
let right_ul_fixed=document.getElementsByClassName("right_ul")[0];
// 返回頂部按鈕
let return_to_top=document.getElementsByClassName("return_to_top")[0];




// 處理header按過後的事件處理
for(let i=0; i<header_li_a.length; i=i+1){
    header_li_a[i].addEventListener("click", ()=>{
        // reset所有header的狀態
        for(let j=0; j<header_li_a.length; j=j+1){
            if(header_li_a[j].className==="header_li_a header_li_a_clicked"){
                header_li_a[j].classList.remove("header_li_a_clicked");
            }
        }
        header_li_a[i].classList.add("header_li_a_clicked");
    })
}

// 漢堡條動畫處理
hamburger_card.addEventListener("click", ()=>{
    hamburger_card.classList.toggle("hambuger_list_hover");
    line_1.classList.toggle("rotate_1");
    line_2.classList.toggle("rotate_2");
    line_3.classList.toggle("rotate_3");
    hamburger_content.classList.toggle("hamburger_content_open");
    left_ul_fixed.classList.toggle("ul_fixed");
    right_ul_fixed.classList.toggle("ul_fixed");
})

// 返回按鈕頂部
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop>600){
        return_to_top.classList.add("make_sure_return_to_top");
        let make_sure_return_to_top=document.getElementsByClassName("make_sure_return_to_top")[0];
        make_sure_return_to_top.addEventListener("click", ()=>{
            document.documentElement.scrollTop=0;
        })
    }
    else{
        return_to_top.classList.remove("make_sure_return_to_top");
    }
    
})

