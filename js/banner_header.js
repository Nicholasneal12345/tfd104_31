
// 處理header按過後的事件處理
let header_li_a=document.getElementsByClassName("header_li_a");
let face=document.getElementById("face");
let face_h=document.getElementById("face_h");
let head=document.getElementById("head");
let head_h=document.getElementById("head_h");
let body=document.getElementById("body");
let body_h=document.getElementById("body_h");
let Italy=document.getElementById("Italy");
let Italy_h=document.getElementById("Italy_h");
let Germany=document.getElementById("Germany");
let Germany_h=document.getElementById("Germany_h");
let Poland=document.getElementById("Poland");
let Poland_h=document.getElementById("Poland_h");
let Taiwan=document.getElementById("Taiwan");
let Taiwan_h=document.getElementById("Taiwan_h");
let India=document.getElementById("India");
let India_h=document.getElementById("India_h");
let Japan=document.getElementById("Japan");
let Japan_h=document.getElementById("Japan_h");
let all_products_categort_button=[face, face_h, head, head_h, body, body_h, Italy, Italy_h, Germany, Germany_h, Poland, Poland_h,
    Taiwan, Taiwan_h, India, India_h, Japan, Japan_h];
let logo=document.getElementsByClassName("logo")[0];
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
// 游標滑到購物車圖案時會觸發的頁面
let cart_hover_content=document.querySelector(".cart_hover_content");
let cart_hover_content_title=document.querySelector(".cart_hover_content_title");
// 判斷購物車裡是否有商品並且更改icon顏色
let shop_li=document.querySelector(".shop_li");





// 游標滑到購物車圖案時會觸發的頁面
window.addEventListener("load", function(){

    let cartAll=JSON.parse(localStorage.getItem("cart_content"));
    if(cartAll){
        shop_li.classList.add('-color')
        if(cart_hover_content.children[1]&&cart_hover_content.children[1].classList.contains("no_products")){
            cart_hover_content.children[1].remove();
        }
        for(let i=0; i<cartAll.length; i=i+1){
            let children;
                children=document.createElement("div");
                children.classList.add("cart_hover_content_item");

            for(let j=0; j<3; j=j+1){
                console.log(cart_hover_content.children[i], i);
                if(j===0){
                    let productsName=document.createElement("p");
                    productsName.innerHTML=`${JSON.parse(localStorage.getItem("cart_content"))[i].products_name}`;
                    children.append(productsName);
                }
                else if(j===1){
                    let productsCount=document.createElement("p");
                    productsCount.innerHTML=`${JSON.parse(localStorage.getItem("cart_content"))[i].products_count}`;
                    children.append(productsCount);
                }
                else if(j===2){
                    let productsPrice=document.createElement("p");
                    productsPrice.innerHTML=`${JSON.parse(localStorage.getItem("cart_content"))[i].products_price*JSON.parse(localStorage.getItem("cart_content"))[i].products_count}`;
                    children.append(productsPrice);
                }
            }
            cart_hover_content.appendChild(children);
        }
    }
    else{
        let children;
                children=document.createElement("div");
                children.classList.add("cart_hover_content_item");
                children.classList.add("no_products");
                children.innerHTML=`目前還沒有商品`;
                cart_hover_content.append(children);
    }
})
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

for(let i=0; i<all_products_categort_button.length; i=i+1){
    all_products_categort_button[i].addEventListener("click", function(event){
        localStorage.setItem("products_category_id", this.id);
        // event.stopImmediatePropagation();
    }, true)
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
    if(window.scrollY>100){
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
