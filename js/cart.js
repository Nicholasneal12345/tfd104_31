// 購物車全部清空按鈕
let clear_cart=document.getElementsByClassName("clear_cart")[0];
let cart_buy_products_content_card=document.getElementsByClassName("cart_buy_products_content_card")[0];
let cart_buy_products_detail_card=document.getElementsByClassName("cart_buy_products_detail_card")[0];
// 購物車內容物
console.log(document.getElementsByClassName("cart_buy_products_detail_card"))




// 購物車全部清空按鈕
clear_cart.addEventListener("click", function(){
    if(window.confirm("確定要刪除購物車裡的所有商品？")){
        localStorage.removeItem("cart_content");
        for(let i=0; i<cart_buy_products_content_card.childNodes.length; i=i+1){
            cart_buy_products_content_card.childNodes[i].remove();
        }
        cart_buy_products_content_card.innerHTML="<h1 class='have_not_chosen'  style= 'color: #d09661;'>目前沒有選擇任何商品</h1>";

        for(let i=3; i<cart_buy_products_detail_card.childNodes.length; i=i+1){
            cart_buy_products_detail_card.childNodes[i].remove()
        }
        cart_buy_products_detail_card.insertAdjacentHTML("beforeend", "<h1 style= 'color: #d09661;'>目前沒有選擇任何商品</h1>");
    }
})

// 購物車內容物
window.addEventListener("load", function(){
    let cart_all=JSON.parse(localStorage.getItem("cart_content"));

    // 設定及修改每個商品的選單數量
    function option_selected(count, cart_all_index){

        let count_in_range=false;

        if(document.getElementsByClassName("products_count_select").length){

            document.getElementsByClassName("products_count_select")[cart_all_index].addEventListener("change", function(){
                document.getElementsByClassName("cart_buy_products_content_price_p")[cart_all_index].innerHTML=`價格：${document.getElementsByClassName("cart_buy_products_content_price_p")[cart_all_index].id*document.getElementsByClassName("products_count_select")[cart_all_index].value}`;
                for(let i=0; i<cart_all.length; i=i+1){
                    if(i===cart_all_index){
                        let price=document.getElementsByClassName("products_count_select")[cart_all_index].value;
                        cart_all[i].products_count=price;
                    }
                }
                localStorage.setItem("cart_content", JSON.stringify(cart_all));
            })

            for(let i=0; i<document.getElementsByClassName("products_count_select")[cart_all_index].children.length; i=i+1){
                if(document.getElementsByClassName("products_count_select")[cart_all_index].children[i].value===count){
                    document.getElementsByClassName("products_count_select")[cart_all_index].children[i].selected=true;
                    count_in_range=true;
                }
            }
            if(!count_in_range){
                window.alert(`目前選擇的${count}超過庫存數量，請重新選擇`);
            }
        }
    }

    if(cart_all){
        for(let i=0; i<cart_all.length; i=i+1){
            console.log(cart_all[i].products_name);
            if (cart_all[i].products_name==="cow_soap"){
                if(document.getElementsByClassName("have_not_chosen").length){
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend", 
                    `<div class="cow_soap_in_cart">
                        <img src="../image/商品圖片/cow肥皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">cow牛乳肥皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_cow_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="45">價格：${cart_all[i].products_price*cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                    option_selected(cart_all[i].products_count.toString(), i);
                    document.getElementsByClassName("remove_cow_soap")[0].addEventListener("click", function(){
                        if(window.confirm("確定要刪除牛乳肥皂嗎？")){
                            document.getElementsByClassName("cow_soap_in_cart")[0].remove();
                        }
                    });
                }
            else if(cart_all[i].products_name==="medimix_soap"){
                if(document.getElementsByClassName("have_not_chosen").length){
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend", 
                    `<div class="medimix_soap_in_cart">
                        <img src="../image/商品圖片/medimix肥皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">medimix肥皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_medimix_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="89">價格：${cart_all[i].products_price*cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_medimix_soap")[0].addEventListener("click", function(){
                    if(window.confirm("確定要刪除medimix肥皂嗎？")){
                        document.getElementsByClassName("medimix_soap_in_cart")[0].remove();
                    }
                });
            }
        }
    }
})
