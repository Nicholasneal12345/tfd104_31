// 購物車全部清空按鈕
let clear_cart=document.getElementsByClassName("clear_cart")[0];
let cart_buy_products_content_card=document.getElementsByClassName("cart_buy_products_content_card")[0];
let cart_buy_products_detail_card=document.getElementsByClassName("cart_buy_products_detail_card")[0];
console.log(cart_buy_products_detail_card.childNodes)



// 購物車全部清空按鈕
clear_cart.addEventListener("click", function(){
    if(window.confirm("確定要刪除購物車裡的所有商品？")){
        for(let i=0; i<cart_buy_products_content_card.childNodes.length; i=i+1){
            cart_buy_products_content_card.childNodes[i].remove();
        }
        cart_buy_products_content_card.innerHTML="<h1 style= 'color: #d09661;'>目前沒有選擇任何商品</h1>";

        for(let i=3; i<cart_buy_products_detail_card.childNodes.length; i=i+1){
            cart_buy_products_detail_card.childNodes[i].remove()
        }
        cart_buy_products_detail_card.insertAdjacentHTML("beforeend", "<h1 style= 'color: #d09661;'>目前沒有選擇任何商品</h1>");
    }
})