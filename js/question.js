let question_chat_item=document.getElementsByClassName("question_chat_item");
console.log(question_chat_item[1].children);



// 對話框移動動畫
window.addEventListener("scroll", function(){
    for(let i=0; i<question_chat_item.length; i=i+1){
        if(window.scrollY>=question_chat_item[i].offsetTop-600){
            if(i%2===0){
                question_chat_item[i].children[1].classList.add("open");
            }
            else{
                question_chat_item[i].children[0].classList.add("open");
            }
        }
        else{
            if(i%2===0){
                question_chat_item[i].children[1].classList.remove("open");
            }
            else{
                question_chat_item[i].children[0].classList.remove("open");
            }
        }
    }
})