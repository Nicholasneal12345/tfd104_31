
let footer_button=document.getElementsByClassName("footer_button");
let footer_question=document.getElementsByClassName("footer_question")[0];

for(let i=0; i<footer_button.length; i=i+1){
    footer_button[i].addEventListener("mouseenter", ()=>{
        footer_button[i].classList.add("footer_button_hover");
        console.log(1);
    })
    footer_button[i].addEventListener("mouseleave", ()=>{
        footer_button[i].classList.remove("footer_button_hover");
    })
}

footer_question.addEventListener("click", ()=>{
    footer_question.classList.add("footer_question_clicked");
})