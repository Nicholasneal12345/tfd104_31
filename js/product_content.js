
// 商品內文圖片放大效果
let products_img=document.getElementsByClassName("products_img")[0];
// 商品數量選擇
let products_count_select_card=document.getElementsByClassName("products_count_select_card")[0];
let products_count_input=document.getElementsByClassName("products_count_input")[0];
let now_count=document.getElementsByClassName("now_count")[0];
let is_count_correct=false;
// 商品購買按鈕特效
let products_buy_button=document.getElementsByClassName("products_buy_button")[0];
let products_buy_button_a=document.getElementsByClassName("products_buy_button_a")[0];
// 根據products_id改變商品內頁內容
let products_title=document.getElementsByClassName("products_title");
let products_interview_content=document.getElementsByClassName("products_interview_content")[0];
let products_adress_content=document.getElementsByClassName("products_adress_content")[0];
let more_products_card=document.getElementsByClassName("more_products_card")[0];
// 點擊放入購物車
let products_price=document.getElementsByClassName("products_price");//為什麼這裡如果打products_price=document.getElementsByClassName("products_price")[0]的話，永遠就指向cow_soap的class為products_price的節點？





// 商品內文圖片放大效果
products_img.addEventListener("mouseenter", ()=>{
    products_img.classList.add("products_img_hover");
})

products_img.addEventListener("mousemove", function(event){
    let rect=this.getBoundingClientRect();
    let x=event.offsetX/rect.width;
    let y=event.offsetY/rect.width;
    this.style.setProperty("--x", x);
    this.style.setProperty("--y", y);
    products_img.classList.add("products_img_mousemove");
})

products_img.addEventListener("mouseleave", ()=>{
    products_img.classList.remove("products_img_hover", "products_img_mousemove");
})

// 商品數量選擇
// 處理輸入的部分
products_count_input.addEventListener("change", function(){
    
    // 先reset清單選項
    for(let i=0; i<products_count_select_card.children.length; i=i+1){
        products_count_select_card.children[i].setAttribute("selected", false);
    }

    // 判斷輸入的選項是反有符合的選項內的內容
    for(let i=0; i<products_count_select_card.children.length; i=i+1){
        if(this.value===products_count_select_card.children[i].innerHTML){
            products_count_select_card.children[i].setAttribute("selected", true);
            is_count_correct=true;
            now_count.innerHTML=`您目前已選擇：${this.value}`;
            return;
        }else{
            is_count_correct=false;
        }
    }

    if(!is_count_correct){
        now_count.innerHTML=`您目前選擇的${this.value}數量不符合庫存數量，請再重新選擇一次！`;
    }
})

// 處理下拉的部分
products_count_select_card.addEventListener("change", ()=>{
    now_count.innerHTML=`您目前已選擇：${products_count_select_card.value}`;
    products_count_input.value=products_count_select_card.value;
})

// 商品購買按鈕特效
products_buy_button.addEventListener("mouseenter", ()=>{
    products_buy_button.classList.add("products_buy_button_hover");
    products_buy_button_a.classList.add("products_buy_button_a_hover");
})

products_buy_button.addEventListener("mouseleave", ()=>{
    products_buy_button.classList.remove("products_buy_button_hover");
    products_buy_button_a.classList.remove("products_buy_button_a_hover");
})

// 根據products_id改變商品內頁內容
document.addEventListener("DOMContentLoaded", function(){
    let products_id=localStorage.getItem("products_id");
    console.log(products_id);
    switch(products_id){
        case "cow_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/cow肥皂.png')";
            products_img.innerHTML='<div class="products_price" id="45"><p>NT45</p></div>';
            products_title[0].innerText=`產品內頁：cow_牛乳肥皂`;
            products_title[1].innerText="cow_牛乳肥皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>日本原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>含牛乳成份</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>細微顆粒溫和去除角質</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：日本<span class="iconify" data-icon="twemoji:flag-for-flag-japan" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "medimix_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/medimix肥皂.png')";
            products_img.innerHTML='<div class="products_price" id="89"><p>NT89</p></div>';
            products_title[0].innerText=`產品內頁：Medimix_肥皂`;
            products_title[1].innerText="Medimix_肥皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>保濕、亮白、抗痘、控油、緊緻</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>適合全身各個部位</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>印度高人氣代購商品</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：印度<span class="iconify" data-icon="emojione:flag-for-india" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "cream_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/乳霜肥皂.png')";
            products_img.innerHTML='<div class="products_price" id="49"><p>NT49</p></div>';
            products_title[0].innerText=`產品內頁：乳霜肥皂`;
            products_title[1].innerText="乳霜肥皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>波蘭原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>不含動物成分</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>蘊含棕櫚油、棕櫚仁油、甘油有效清潔肌膚</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：波蘭<span class="iconify" data-icon="twemoji:flag-for-flag-poland" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "baby_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/施巴嬰兒潔膚皂.png')";
            products_img.innerHTML='<div class="products_price" id="180"><p>NT180</p></div>';
            products_title[0].innerText=`產品內頁：施巴嬰兒潔膚皂`;
            products_title[1].innerText="施巴嬰兒潔膚皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>德國原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>小麥胚芽萃取</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>不含皂鹼，洗後不乾澀</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：德國<span class="iconify" data-icon="emojione-v1:flag-for-germany" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "seba_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/施巴潔膚皂.png')";
            products_img.innerHTML='<div class="products_price" id="198"><p>NT198</p></div>';
            products_title[0].innerText=`產品內頁：施巴潔膚皂`;
            products_title[1].innerText="施巴潔膚皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>德國原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>敏感/中性/油性/混合膚質使用</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>清潔、舒敏、保濕</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：德國<span class="iconify" data-icon="emojione-v1:flag-for-germany" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Barwa_white_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/歐洲Barwa奢華SPA白麝香香氛皂.png')";
            products_img.innerHTML='<div class="products_price" id="129"><p>NT129</p></div>';
            products_title[0].innerText=`產品內頁：歐洲Barwa奢華SPA白麝香香氛皂`;
            products_title[1].innerText="歐洲Barwa奢華SPA白麝香香氛皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>波蘭原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>精緻質感奢華香氛</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>洗後滋潤同時撫慰心靈</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：波蘭<span class="iconify" data-icon="twemoji:flag-for-flag-poland" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Barwa_green_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/歐洲Barwa奢華SPA綠橄欖香氛皂.png')";
            products_img.innerHTML='<div class="products_price" id="129"><p>NT129</p></div>';
            products_title[0].innerText=`產品內頁：歐洲Barwa奢華SPA綠橄欖香氛皂`;
            products_title[1].innerText="歐洲Barwa奢華SPA綠橄欖香氛皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>波蘭原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>精緻質感奢華香氛</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>獨家調配迷人香氣</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：波蘭<span class="iconify" data-icon="twemoji:flag-for-flag-poland" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Barwa_snow_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/歐洲Barwa奢華SPA雪松香氛皂.png')";
            products_img.innerHTML='<div class="products_price" id="129"><p>NT129</p></div>';
            products_title[0].innerText=`產品內頁：歐洲Barwa奢華SPA雪松香氛皂`;
            products_title[1].innerText="歐洲Barwa奢華SPA雪松香氛皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>波蘭原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>精緻質感奢華香氛</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>獨家調配迷人香氣</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：波蘭<span class="iconify" data-icon="twemoji:flag-for-flag-poland" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Barwa_black_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/歐洲Barwa奢華SPA黑蘭花香氛皂.png')";
            products_img.innerHTML='<div class="products_price" id="129"><p>NT129</p></div>';
            products_title[0].innerText=`產品內頁：歐洲Barwa奢華SPA黑蘭花香氛皂`;
            products_title[1].innerText="歐洲Barwa奢華SPA黑蘭花香氛皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>波蘭原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>精緻質感奢華香氛</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>獨家調配迷人香氣</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：波蘭<span class="iconify" data-icon="twemoji:flag-for-flag-poland" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Barwa_nature_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/歐洲Barwa高效舒敏天然皂.png')";
            products_img.innerHTML='<div class="products_price" id="99"><p>NT99</p></div>';
            products_title[0].innerText=`產品內頁：歐洲Barwa高效舒敏天然皂`;
            products_title[1].innerText="歐洲Barwa高效舒敏天然皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>波蘭原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>素食友善配方</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>溫和親膚不刺激</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：波蘭<span class="iconify" data-icon="twemoji:flag-for-flag-poland" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Chamomile_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/洋甘菊肥皂.png')";
            products_img.innerHTML='<div class="products_price" id="59"><p>NT59</p></div>';
            products_title[0].innerText=`產品內頁：洋甘菊肥皂`;
            products_title[1].innerText="洋甘菊肥皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>波蘭原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>富含洋甘菊提取物</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>無動物性實驗</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：波蘭<span class="iconify" data-icon="twemoji:flag-for-flag-poland" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "green_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/綠橄欖肥皂.png')";
            products_img.innerHTML='<div class="products_price" id="49"><p>NT49</p></div>';
            products_title[0].innerText=`產品內頁：綠橄欖肥皂`;
            products_title[1].innerText="綠橄欖肥皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>波蘭原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>不含動物成分</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>有效潔淨肌膚</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：波蘭<span class="iconify" data-icon="twemoji:flag-for-flag-poland" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Florinda_love_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/義大利Florinda寵愛芍藥香氛植皂.png')";
            products_img.innerHTML='<div class="products_price" id="299"><p>NT299</p></div>';
            products_title[0].innerText=`產品內頁：義大利Florinda寵愛芍藥香氛植皂`;
            products_title[1].innerText="義大利Florinda寵愛芍藥香氛植皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>義大利原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>使用3%高品質香水</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>自然植物基底成分</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：義大利<span class="iconify" data-icon="twemoji:flag-for-flag-italy" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Florinda_sweet_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/義大利Florinda沁甜杏花香氛植皂.png')";
            products_img.innerHTML='<div class="products_price" id="299"><p>NT299</p></div>';
            products_title[0].innerText=`產品內頁：義大利Florinda沁甜杏花香氛植皂`;
            products_title[1].innerText="義大利Florinda沁甜杏花香氛植皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>義大利原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>使用3%高品質香水</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>自然植物基底成分</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：義大利<span class="iconify" data-icon="twemoji:flag-for-flag-italy" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Florinda_comfortable_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/義大利Florinda薰衣草舒眠香氛植皂.png')";
            products_img.innerHTML='<div class="products_price" id="299"><p>NT299</p></div>';
            products_title[0].innerText=`產品內頁：義大利Florinda薰衣草舒眠香氛植皂`;
            products_title[1].innerText="義大利Florinda薰衣草舒眠香氛植皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>義大利原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>使用3%高品質香水</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>自然植物基底成分</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：義大利<span class="iconify" data-icon="twemoji:flag-for-flag-italy" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Florinda_aroma_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/義大利Florinda金雀花優雅香氛植皂.png')";
            products_img.innerHTML='<div class="products_price" id="299"><p>NT299</p></div>';
            products_title[0].innerText=`產品內頁：義大利Florinda金雀花優雅香氛植皂`;
            products_title[1].innerText="義大利Florinda金雀花優雅香氛植皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>義大利原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>使用3%高品質香水</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>自然植物基底成分</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：義大利<span class="iconify" data-icon="twemoji:flag-for-flag-italy" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "Florinda_plant_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/義大利Florinda雅痞風荳蔻植萃皂.png')";
            products_img.innerHTML='<div class="products_price" id="149"><p>NT149</p></div>';
            products_title[0].innerText=`產品內頁：義大利Florinda雅痞風荳蔻植萃皂`;
            products_title[1].innerText="義大利Florinda雅痞風荳蔻植萃皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>義大利原裝進口</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>使用3%高品質香水</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>自然植物基底成分</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：義大利<span class="iconify" data-icon="twemoji:flag-for-flag-italy" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
        case "bee_soap":
            products_img.style.backgroundImage="url('../image/商品圖片/蜂王艾草山藥肥皂.png')";
            products_img.innerHTML='<div class="products_price" id="49"><p>NT49</p></div>';
            products_title[0].innerText=`產品內頁：蜂王艾草山藥肥皂`;
            products_title[1].innerText="蜂王艾草山藥肥皂";
            products_interview_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>台灣本土產品</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>添加艾草、山藥、絲瓜萃取液</p>
                                                  <p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>沐浴、潔面皆宜</p>`;
            products_adress_content.innerHTML=`<p style="text-align: start; color: #d09661;"><span class="iconify" data-icon="mdi:leaf" style="color: #1DB02B; width: 16px; height: 16px;"></span>產地：台灣<span class="iconify" data-icon="twemoji:flag-for-flag-taiwan" style="color: #777; width: 16px; height: 16px; margin-left: 5px;"></span></p>`;
            break;
    }
})

function alink(id){
    localStorage.setItem("products_id", id);
}

// 點擊放入購物車
products_buy_button.addEventListener("click", function(){
    let is_repeat=false;
    let cart_all=[];
    let cart_item={
        products_count:Number(products_count_select_card.value),
        products_price:products_price[0].id,
        products_name:localStorage.getItem("products_id")
    }
    if(!localStorage.getItem("cart_content")){
        cart_all.push(cart_item);
        localStorage.setItem("cart_content", JSON.stringify(cart_all));
    }
    else{
        cart_all=JSON.parse(localStorage.getItem("cart_content"));
        for(let i=0; i<cart_all.length; i=i+1){
            if(cart_all[i].products_name===cart_item.products_name){
                cart_all[i].products_count=cart_all[i].products_count+cart_item.products_count;
                is_repeat=true;
            }
        }
        if(!is_repeat){
            cart_all.push(cart_item);
        }
        localStorage.setItem("cart_content", JSON.stringify(cart_all));
    }
})