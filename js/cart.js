// 購物車全部清空按鈕
let clear_cart=document.getElementsByClassName("clear_cart")[0];
let cart_buy_products_content_card=document.getElementsByClassName("cart_buy_products_content_card")[0];
let cart_buy_products_detail_card=document.getElementsByClassName("cart_buy_products_detail_card")[0];
// 購物車內容物




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

    if(cart_all){
        for(let i=0; i<cart_all.length; i=i+1){
            switch (cart_all[i].products_name){
                case "cow_soap":
                    if(document.getElementsByClassName("have_not_chosen")){
                        cart_buy_products_content_card.childNodes[1].remove();
                    }
                    cart_buy_products_content_card.insertAdjacentHTML("beforeend", 
                       `<img src="../image/商品圖片/cow肥皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">cow牛乳肥皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：${cart_all[i].products_count.toString()}</p>
                                <select style="color: #d09661;" value="">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <button class="remove">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p style="margin-left: 5px; color: #d09661;">價格：${cart_all[i].products_price}</p>
                            </div>
                        </div>`
                    )
            }
        }
    }
})