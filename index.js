
function call(){
    var p=this;
   console.log(p);
}
function sound(t){
    switch (t) {
        case "w":
           var audio=new Audio("crash.mp3");
           audio.play();
        break;    
        case "a":
            var audio=new Audio("kick-bass.mp3");
            audio.play();         
        break;
        case "d":
            var audio=new Audio("snare.mp3");
            audio.play();         
        break;
        case "s":
            var audio=new Audio("tom1.mp3");
            audio.play();           
        break;
        case "j":
            var audio=new Audio("tom2.mp3");
            audio.play();
        break;
        case "k":
            var audio=new Audio("tom3.mp3");
            audio.play();
        break;
        case "l":
            var audio=new Audio("tom4.mp3");
            audio.play();
        break;   
    default:
        break;
}
}
for(var i=0;i<document.getElementsByClassName("drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
    var t =this.innerHTML;
    press(t);
    sound(t);
});
    
}
function audio(){
    var audio = new Audio("crash.mp3");
    audio.play();
}
document.addEventListener("keypress", function(event){
    var t=event.key;
    press(t);
    sound(t);
});
function press(key){
    var p=document.querySelector("."+key);
   p.classList.add("pressed");
   
   setTimeout(function(){
     p.classList.remove("pressed");
   },300)
}
