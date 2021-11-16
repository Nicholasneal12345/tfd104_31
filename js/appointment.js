let username = document.getElementById("username");
let usercellphone = document.getElementById("usercellphone");
let useremail = document.getElementById("useremail");
let textarea = document.getElementsByTagName("textarea")[0];




// 姓名
username.addEventListener("focus", function(){
    this.setAttribute("placeholder", "");
})

username.addEventListener("blur", function(){
    if(!this.value){
        this.setAttribute("placeholder", "請輸入姓名...");
        window.alert("未輸入姓名");
    }
})

// 電話
usercellphone.addEventListener("focus", function(){
    this.setAttribute("placeholder", "");
})

usercellphone.addEventListener("blur", function(){
    if(!this.value){
        this.setAttribute("placeholder", "請輸入電話號碼...");
    }

    if(!this.value.match(/\d{10}/g)){
        window.alert("電話號碼輸入錯誤");
    }
})

// email
useremail.addEventListener("focus", function(){
    this.setAttribute("placeholder", "");
})

useremail.addEventListener("blur", function(){
    if(!this.value){
        this.setAttribute("placeholder", "請輸入email...");
        window.alert("未輸入email");
    }
})

// textarea
textarea.addEventListener("focus", function(){
    this.setAttribute("placeholder", "");
})

textarea.addEventListener("blur", function(){
    this.setAttribute("placeholder", "請輸入訊息...");
})