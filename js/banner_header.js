
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
// slider_img
let slider_img_item=document.getElementsByClassName("slider_img_item");//圖片的dom，總共有4個
let slider_img_bottom=document.getElementsByClassName("slider_img_bottom");//底下的按鈕，總共有4個
let slider_img_next=document.getElementsByClassName("slider_img_next")[0];//右按鈕
let slider_img_previous=document.getElementsByClassName("slider_img_previous")[0];//左按鈕




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

// slider_img
let time=30000;

(function(){

    let i=40000;//為了解決負數的問題暫時將初始直射的大一點;

    slider_img_previous.addEventListener("click", ()=>{
        i=i-1;
        if(i%4===0){
            slider_img_bottom[0].style.backgroundColor=`#d09661`;
            slider_img_bottom[1].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[2].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[3].style.backgroundColor=`#FCFAE3`;
            slider_img_item[0].style.transform=`translate(0 0)`;
            slider_img_item[0].style.zIndex=0;
            slider_img_item[1].style.transform=`translate(0, 0)`;
            slider_img_item[1].style.zIndex=1;
            slider_img_item[2].style.transform=`translate(0, 0)`;
            slider_img_item[2].style.zIndex=0;
            slider_img_item[3].style.transform=`translate(0, 0)`;
            slider_img_item[3].style.zIndex=-1;
        }
        else if(i%4===1){
            slider_img_bottom[0].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[1].style.backgroundColor=`#d09661`;
            slider_img_bottom[2].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[3].style.backgroundColor=`#FCFAE3`;
            slider_img_item[0].style.transform=`translate(100%, 0)`;
            slider_img_item[0].style.zIndex=-1;
            slider_img_item[1].style.transform=`translate(-100%, 0)`;
            slider_img_item[1].style.zIndex=0;
            slider_img_item[2].style.transform=`translate(-100%, 0)`;
            slider_img_item[2].style.zIndex=1;
            slider_img_item[3].style.transform=`translate(100%, 0)`;
            slider_img_item[3].style.zIndex=0;
        }
        else if(i%4===2){
            slider_img_bottom[0].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[1].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[2].style.backgroundColor=`#d09661`;
            slider_img_bottom[3].style.backgroundColor=`#FCFAE3`;
            slider_img_item[0].style.transform=`translate(200%, 0)`;
            slider_img_item[0].style.zIndex=0;
            slider_img_item[1].style.transform=`translate(0, 0)`;
            slider_img_item[1].style.zIndex=-1;
            slider_img_item[2].style.transform=`translate(-200%, 0)`;
            slider_img_item[2].style.zIndex=0;
            slider_img_item[3].style.transform=`translate(0, 0)`;
            slider_img_item[3].style.zIndex=1;
        }
        else if(i%4===3){
            slider_img_bottom[0].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[1].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[2].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[3].style.backgroundColor=`#d09661`;
            slider_img_item[0].style.transform=`translate(100%, 0)`;
            slider_img_item[0].style.zIndex=1;
            slider_img_item[1].style.transform=`translate(100%, 0)`;
            slider_img_item[1].style.zIndex=0;
            slider_img_item[2].style.transform=`translate(-100%, 0)`;
            slider_img_item[2].style.zIndex=-1;
            slider_img_item[3].style.transform=`translate(-100%, 0)`;
            slider_img_item[3].style.zIndex=0;
        }     
    })

    slider_img_next.addEventListener("click", ()=>{
        i=i+1;
        if(i%4===0){
            slider_img_bottom[0].style.backgroundColor=`#d09661`;
            slider_img_bottom[1].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[2].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[3].style.backgroundColor=`#FCFAE3`;
            slider_img_item[0].style.transform=`translate(0 0)`;
            slider_img_item[0].style.zIndex=0;
            slider_img_item[1].style.transform=`translate(0, 0)`;
            slider_img_item[1].style.zIndex=1;
            slider_img_item[2].style.transform=`translate(0, 0)`;
            slider_img_item[2].style.zIndex=0;
            slider_img_item[3].style.transform=`translate(0, 0)`;
            slider_img_item[3].style.zIndex=-1;
        }
        else if(i%4===1){
            slider_img_bottom[0].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[1].style.backgroundColor=`#d09661`;
            slider_img_bottom[2].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[3].style.backgroundColor=`#FCFAE3`;
            slider_img_item[0].style.transform=`translate(100%, 0)`;
            slider_img_item[0].style.zIndex=-1;
            slider_img_item[1].style.transform=`translate(-100%, 0)`;
            slider_img_item[1].style.zIndex=0;
            slider_img_item[2].style.transform=`translate(-100%, 0)`;
            slider_img_item[2].style.zIndex=1;
            slider_img_item[3].style.transform=`translate(100%, 0)`;
            slider_img_item[3].style.zIndex=0;
        }
        else if(i%4===2){
            slider_img_bottom[0].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[1].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[2].style.backgroundColor=`#d09661`;
            slider_img_bottom[3].style.backgroundColor=`#FCFAE3`;
            slider_img_item[0].style.transform=`translate(200%, 0)`;
            slider_img_item[0].style.zIndex=0;
            slider_img_item[1].style.transform=`translate(0, 0)`;
            slider_img_item[1].style.zIndex=-1;
            slider_img_item[2].style.transform=`translate(-200%, 0)`;
            slider_img_item[2].style.zIndex=0;
            slider_img_item[3].style.transform=`translate(0, 0)`;
            slider_img_item[3].style.zIndex=1;
        }
        else if(i%4===3){
            slider_img_bottom[0].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[1].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[2].style.backgroundColor=`#FCFAE3`;
            slider_img_bottom[3].style.backgroundColor=`#d09661`;
            slider_img_item[0].style.transform=`translate(100%, 0)`;
            slider_img_item[0].style.zIndex=1;
            slider_img_item[1].style.transform=`translate(100%, 0)`;
            slider_img_item[1].style.zIndex=0;
            slider_img_item[2].style.transform=`translate(-100%, 0)`;
            slider_img_item[2].style.zIndex=-1;
            slider_img_item[3].style.transform=`translate(-100%, 0)`;
            slider_img_item[3].style.zIndex=0;
        }
    })

    let slider_run=setInterval(function(){
        i=i+1;
        for(let j=0; j<4; j=j+1){
            if(i%4===0){
                slider_img_bottom[0].style.backgroundColor=`#d09661`;
                slider_img_bottom[1].style.backgroundColor=`#FCFAE3`;
                slider_img_bottom[2].style.backgroundColor=`#FCFAE3`;
                slider_img_bottom[3].style.backgroundColor=`#FCFAE3`;
                slider_img_item[0].style.transform=`translate(0 0)`;
                slider_img_item[0].style.zIndex=0;
                slider_img_item[1].style.transform=`translate(0, 0)`;
                slider_img_item[1].style.zIndex=1;
                slider_img_item[2].style.transform=`translate(0, 0)`;
                slider_img_item[2].style.zIndex=0;
                slider_img_item[3].style.transform=`translate(0, 0)`;
                slider_img_item[3].style.zIndex=-1;
            }
            else if(i%4===1){
                slider_img_bottom[0].style.backgroundColor=`#FCFAE3`;
                slider_img_bottom[1].style.backgroundColor=`#d09661`;
                slider_img_bottom[2].style.backgroundColor=`#FCFAE3`;
                slider_img_bottom[3].style.backgroundColor=`#FCFAE3`;
                slider_img_item[0].style.transform=`translate(100%, 0)`;
                slider_img_item[0].style.zIndex=-1;
                slider_img_item[1].style.transform=`translate(-100%, 0)`;
                slider_img_item[1].style.zIndex=0;
                slider_img_item[2].style.transform=`translate(-100%, 0)`;
                slider_img_item[2].style.zIndex=1;
                slider_img_item[3].style.transform=`translate(100%, 0)`;
                slider_img_item[3].style.zIndex=0;
            }
            else if(i%4===2){
                slider_img_bottom[0].style.backgroundColor=`#FCFAE3`;
                slider_img_bottom[1].style.backgroundColor=`#FCFAE3`;
                slider_img_bottom[2].style.backgroundColor=`#d09661`;
                slider_img_bottom[3].style.backgroundColor=`#FCFAE3`;
                slider_img_item[0].style.transform=`translate(200%, 0)`;
                slider_img_item[0].style.zIndex=0;
                slider_img_item[1].style.transform=`translate(0, 0)`;
                slider_img_item[1].style.zIndex=-1;
                slider_img_item[2].style.transform=`translate(-200%, 0)`;
                slider_img_item[2].style.zIndex=0;
                slider_img_item[3].style.transform=`translate(0, 0)`;
                slider_img_item[3].style.zIndex=1;
            }
            else if(i%4===3){
                slider_img_bottom[0].style.backgroundColor=`#FCFAE3`;
                slider_img_bottom[1].style.backgroundColor=`#FCFAE3`;
                slider_img_bottom[2].style.backgroundColor=`#FCFAE3`;
                slider_img_bottom[3].style.backgroundColor=`#d09661`;
                slider_img_item[0].style.transform=`translate(100%, 0)`;
                slider_img_item[0].style.zIndex=1;
                slider_img_item[1].style.transform=`translate(100%, 0)`;
                slider_img_item[1].style.zIndex=0;
                slider_img_item[2].style.transform=`translate(-100%, 0)`;
                slider_img_item[2].style.zIndex=-1;
                slider_img_item[3].style.transform=`translate(-100%, 0)`;
                slider_img_item[3].style.zIndex=0;
            }
        }
    }, 30000)
})();

slider_img_item[1].style.zIndex=1;
slider_img_item[3].style.zIndex=-1;
// slider_img_item[0].style.transform=`translateZ(100px)`

console.log(slider_img_item[1].style);