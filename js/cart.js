// 購物車全部清空按鈕
let clear_cart = document.getElementsByClassName("clear_cart")[0];
let cart_buy_products_content_card = document.getElementsByClassName("cart_buy_products_content_card")[0];
let cart_buy_products_detail_card = document.getElementsByClassName("cart_buy_products_detail_card")[0];
// 購物車內容物
//購物車明細條
let cart_buy_products_detail_content = document.getElementsByClassName("cart_buy_products_detail_content")[0];
let cart_buy_products_detail_total_item = document.getElementsByClassName("cart_buy_products_detail_total_item")[0];
// 購物流程文字游標觸碰時顯示隱藏文字
let buy_process_circle = document.getElementsByClassName("buy_process_circle");




// 購物流程文字游標觸碰時顯示隱藏文字
for(let i=0; i<buy_process_circle.length; i=i+1){
    buy_process_circle[i].children[1].addEventListener("mouseenter", function(){
        this.classList.add("text_show");
    })
    buy_process_circle[i].children[1].addEventListener("mouseleave", function(){
        this.classList.remove("text_show");
    })
}
// 購物車全部清空按鈕
clear_cart.addEventListener("click", function () {
    if (window.confirm("確定要刪除購物車裡的所有商品？")) {
        localStorage.removeItem("cart_content");
        for (let i = 0; i < cart_buy_products_content_card.childNodes.length; i = i + 1) {
            cart_buy_products_content_card.childNodes[i].remove();
        }
        cart_buy_products_content_card.innerHTML = "<h1 class='have_not_chosen'  style= 'color: #d09661;'>目前沒有選擇任何商品</h1>";

        for (let i = 3; i < cart_buy_products_detail_card.childNodes.length; i = i + 1) {
            cart_buy_products_detail_card.childNodes[i].remove()
        }
        cart_buy_products_detail_card.insertAdjacentHTML("beforeend", "<h1 style= 'color: #d09661;'>目前沒有選擇任何商品</h1>");
    }
})

// 購物車內容物
window.addEventListener("load", function () {
    let cart_all = JSON.parse(localStorage.getItem("cart_content"));
    let totalPrice = 0;

    // 設定及修改每個商品的選單數量以及購物車明細條變動
    function option_selected(count, cart_all_index) {
        console.log(document.getElementsByClassName("products_count_select")[0]);
        let count_in_range = false;
        if (document.getElementsByClassName("products_count_select").length) {
            document.getElementsByClassName("products_count_select")[cart_all_index].addEventListener("change", function () {
                // 購物車明細條
                let cart_buy_products_detail_content_item = document.getElementsByClassName("cart_buy_products_detail_content_item");
                document.getElementsByClassName("cart_buy_products_content_price_p")[cart_all_index].innerHTML = `價格：${document.getElementsByClassName("cart_buy_products_content_price_p")[cart_all_index].id * document.getElementsByClassName("products_count_select")[cart_all_index].value}`;
                // console.log(document.getElementsByClassName("cart_buy_products_content_price_p")[cart_all_index].innerHTML, document.getElementsByClassName("cart_buy_products_content_price_p")[cart_all_index].id, cart_all_index);
                for (let i = 0; i < cart_all.length; i = i + 1) {
                    if (i === cart_all_index) {
                        let price = document.getElementsByClassName("products_count_select")[cart_all_index].value;

                        // 明細條總和
                        if (price - cart_all[i].products_count > 0) {
                            totalPrice = totalPrice + (price - cart_all[i].products_count) * cart_all[i].products_price;
                        }
                        else if (price - cart_all[i].products_count < 0) {
                            totalPrice = totalPrice - (cart_all[i].products_count - price) * cart_all[i].products_price;
                        }
                        cart_buy_products_detail_total_item.innerHTML =
                            `<p>總和</p>
                        <p>NT${totalPrice}</p>`;

                        cart_all[i].products_count = price;
                        cart_buy_products_detail_content_item[cart_all_index].innerHTML =
                            `<p class="p_title">${cart_all[cart_all_index].products_name}*${document.getElementsByClassName("products_count_select")[cart_all_index].value}</p>
                        <p class="p_price">NT${document.getElementsByClassName("products_count_select")[cart_all_index].value * cart_all[cart_all_index].products_price}</p>`;
                    }
                }

                console.log(cart_buy_products_detail_content_item[cart_all_index].innerHTML);
                localStorage.setItem("cart_content", JSON.stringify(cart_all));

                // 總和
            })

            for (let i = 0; i < document.getElementsByClassName("products_count_select")[cart_all_index].children.length; i = i + 1) {
                if (document.getElementsByClassName("products_count_select")[cart_all_index].children[i].value === count) {
                    document.getElementsByClassName("products_count_select")[cart_all_index].children[i].selected = true;
                    count_in_range = true;
                }
            }
            if (!count_in_range) {
                window.alert(`目前選擇的${count}超過庫存數量，請重新選擇`);
            }
        }
    }

    if (cart_all) {
        for (let i = 0; i < cart_all.length; i = i + 1) {
            if (cart_all[i].products_name === "cow_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
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
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="45">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                // 傳入數量以及cart_all的index到option_selected function裡
                console.log(document.getElementsByClassName("products_count_select"), i);
                option_selected(cart_all[i].products_count.toString(), i);

                // 每個商品的個別移除按鈕
                document.getElementsByClassName("remove_cow_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除牛乳肥皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("cow_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "medimix_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
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
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="89">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_medimix_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除medimix肥皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("medimix_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "cream_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="cream_soap_in_cart">
                        <img src="../image/商品圖片/乳霜肥皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">乳霜肥皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_cream_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="49">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_cream_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除乳霜肥皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("cream_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "baby_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="baby_soap_in_cart">
                        <img src="../image/商品圖片/施巴嬰兒潔膚皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">施巴嬰兒潔膚皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_baby_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="180">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_baby_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除施巴嬰兒潔膚皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("baby_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "seba_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="seba_soap_in_cart">
                        <img src="../image/商品圖片/施巴潔膚皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">施巴潔膚皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_seba_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="198">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_seba_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除施巴潔膚皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("seba_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Barwa_white_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Barwa_white_soap_in_cart">
                        <img src="../image/商品圖片/歐洲Barwa奢華SPA白麝香香氛皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">歐洲Barwa奢華SPA白麝香香氛皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Barwa_white_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="129">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Barwa_white_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除歐洲Barwa奢華SPA白麝香香氛皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Barwa_white_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Barwa_green_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Barwa_green_soap_in_cart">
                        <img src="../image/商品圖片/歐洲Barwa奢華SPA綠橄欖香氛皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">歐洲Barwa奢華SPA綠橄欖香氛皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Barwa_green_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="129">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Barwa_green_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除歐洲Barwa奢華SPA綠橄欖香氛皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Barwa_green_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Barwa_snow_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Barwa_snow_soap_in_cart">
                        <img src="../image/商品圖片/歐洲Barwa奢華SPA雪松香氛皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">歐洲Barwa奢華SPA雪松香氛皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Barwa_snow_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="129">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Barwa_snow_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除歐洲Barwa奢華SPA雪松香氛皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Barwa_snow_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Barwa_black_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Barwa_black_soap_in_cart">
                        <img src="../image/商品圖片/歐洲Barwa奢華SPA黑蘭花香氛皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">歐洲Barwa奢華SPA黑蘭花香氛皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Barwa_black_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="129">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Barwa_black_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除歐洲Barwa奢華SPA黑蘭花香氛皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Barwa_black_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Barwa_nature_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Barwa_nature_soap_in_cart">
                        <img src="../image/商品圖片/歐洲Barwa高效舒敏天然皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">歐洲Barwa高效舒敏天然皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Barwa_nature_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="99">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Barwa_nature_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除歐洲Barwa高效舒敏天然皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Barwa_nature_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Chamomile_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Chamomile_soap_in_cart">
                        <img src="../image/商品圖片/洋甘菊肥皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">洋甘菊肥皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Chamomile_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="59">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Chamomile_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除洋甘菊肥皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Chamomile_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "green_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="green_soap_in_cart">
                        <img src="../image/商品圖片/綠橄欖肥皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">綠橄欖肥皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_green_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="49">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_green_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除綠橄欖肥皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("green_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Florinda_love_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Florinda_love_soap_in_cart">
                        <img src="../image/商品圖片/義大利Florinda寵愛芍藥香氛植皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">義大利Florinda寵愛芍藥香氛植皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Florinda_love_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="299">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Florinda_love_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除義大利Florinda寵愛芍藥香氛植皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Florinda_love_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Florinda_sweet_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Florinda_sweet_soap_in_cart">
                        <img src="../image/商品圖片/義大利Florinda沁甜杏花香氛植皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">義大利Florinda沁甜杏花香氛植皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Florinda_sweet_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="299">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Florinda_sweet_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除義大利Florinda沁甜杏花香氛植皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Florinda_sweet_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Florinda_comfortable_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Florinda_comfortable_soap_in_cart">
                        <img src="../image/商品圖片/義大利Florinda薰衣草舒眠香氛植皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">義大利Florinda薰衣草舒眠香氛植皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Florinda_comfortable_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="299">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Florinda_comfortable_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除義大利Florinda薰衣草舒眠香氛植皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Florinda_comfortable_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Florinda_aroma_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Florinda_aroma_soap_in_cart">
                        <img src="../image/商品圖片/義大利Florinda金雀花優雅香氛植皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">義大利Florinda金雀花優雅香氛植皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Florinda_aroma_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="299">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Florinda_aroma_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除義大利Florinda金雀花優雅香氛植皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Florinda_aroma_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "Florinda_plant_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="Florinda_plant_soap_in_cart">
                        <img src="../image/商品圖片/義大利Florinda雅痞風荳蔻植萃皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">義大利Florinda雅痞風荳蔻植萃皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_Florinda_plant_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="149">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_Florinda_plant_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除義大利Florinda雅痞風荳蔻植萃皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("Florinda_plant_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }

            else if (cart_all[i].products_name === "bee_soap") {
                if (document.getElementsByClassName("have_not_chosen").length) {
                    console.log(document.getElementsByClassName("have_not_chosen"));
                    cart_buy_products_content_card.children[0].remove();
                }
                cart_buy_products_content_card.insertAdjacentHTML("beforeend",
                    `<div class="bee_soap_in_cart">
                        <img src="../image/商品圖片/蜂王艾草山藥肥皂.png">
                        <div class="cart_buy_products_content">
                            <p style="color: #d09661; font-size: 18px; font-weight: bold; margin: 0 0 0 5px;">蜂王艾草山藥肥皂</p>
                            <div class="cart_buy_products_content_count_and_remove">
                                <p style="margin-left: 5px; display: inline-block; color: #d09661;">數量：</p>
                                <select style="color: #d09661;" class="products_count_select">
                                    <option vlaue="1" class="products_count_option">1</option>
                                    <option vlaue="2" class="products_count_option">2</option>
                                    <option vlaue="3" class="products_count_option">3</option>
                                </select>
                                <button class="remove remove_bee_soap">移除</button>
                            </div>
                            <div class="cart_buy_products_content_price">
                                <p class="cart_buy_products_content_price_p" style="margin-left: 5px; color: #d09661;" id="49">價格：${cart_all[i].products_price * cart_all[i].products_count}</p>
                            </div>
                        </div>
                    </div>
                    `
                )
                option_selected(cart_all[i].products_count.toString(), i);
                document.getElementsByClassName("remove_bee_soap")[0].addEventListener("click", function () {
                    if (window.confirm("確定要刪除蜂王艾草山藥肥皂嗎？")) {
                        totalPrice = totalPrice - cart_all[i].products_price;
                        cart_buy_products_detail_total_item.innerHTML =
                        `<p>總和</p>
                        <p>NT${totalPrice}</p>`;
                        cart_buy_products_detail_content.children[i].remove();

                        document.getElementsByClassName("bee_soap_in_cart")[0].remove();
                        cart_all.splice(i, 1);
                        localStorage.setItem("cart_content", JSON.stringify(cart_all));
                    }
                });
            }
        }

        // 購物車明細條
        for (let i = 0; i < cart_all.length; i = i + 1) {
            let cart_buy_products_detail_content_item = document.createElement("div");

            cart_buy_products_detail_content_item.classList.add("cart_buy_products_detail_content_item");
            cart_buy_products_detail_content_item.insertAdjacentHTML("beforeend",
                `<p class="p_title">${cart_all[i].products_name}*${cart_all[i].products_count}</p>
            <p class="p_price">NT${cart_all[i].products_price * cart_all[i].products_count}</p>`);
            cart_buy_products_detail_content.appendChild(cart_buy_products_detail_content_item);

            totalPrice = totalPrice + cart_all[i].products_price * cart_all[i].products_count;
        }

        cart_buy_products_detail_total_item.innerHTML =
            `<p>總和</p>
        <p>NT${totalPrice}</p>`
    }
})
