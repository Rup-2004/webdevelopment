var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for( var i=0;i<numberOfDrumButtons;i++){
    var eachButton=document.querySelectorAll(".drum")[i];
    

    
    eachButton.addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    

    
}



document.addEventListener('keydown',function (event){playSound(event.key); 
    console.log(event.key);
    buttonAnimation(event.key);
});


function chooseSoundurl(key){
    if (key=='w' )
    return "sounds/crash.mp3";
    if (key=='a')
    return "sounds/kick-bass.mp3";
    if (key=='s')
    return "sounds/snare.mp3";
    if (key=='d')
    return "sounds/tom-1.mp3";
    if (key=='j')
    return "sounds/tom-2.mp3";
    if (key=='k')
    return "sounds/tom-3.mp3";
    if (key=='l')
    return "sounds/tom-4.mp3";
    

}


function chooseImageurl(key){
    if (key==0)
    return "img/img/crash.png";
    if (key==1)
    return "img/img/kick.png";
    if (key==2)
    return "img/img/snare.png";
    if (key==3)
    return "img/img/tom1.png";
    if (key==4)
    return "img/img/tom2.png";
    if (key==5)
    return "img/img/tom3.png";
    if (key==6)
    return "img/img/tom4.png";
    

}


function playSound(key){
    switch(key){
            case 'w':
                var audio = new Audio(`${chooseSoundurl(key)}`);
                audio.play();
                break;
            case 'a':
                var audio = new Audio(`${chooseSoundurl(key)}`);
                audio.play();
                break;
            case 's':
                var audio = new Audio(`${chooseSoundurl(key)}`);
                audio.play();
                break;
            case 'd':
                var audio = new Audio(`${chooseSoundurl(key)}`);
                audio.play();
                break;
            case 'j':
                var audio = new Audio(`${chooseSoundurl(key)}`);
                audio.play();
                break;
            case 'k':
                var audio = new Audio(`${chooseSoundurl(key)}`);
                audio.play();
                break;
            case 'l':
                var audio = new Audio(`${chooseSoundurl(key)}`);
                audio.play();
                break;
            default:
                console.log("another keyboard key is pressed.");
    }
}

function buttonAnimation(Currentkey){
    var activeButton=document.querySelector("."+Currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}