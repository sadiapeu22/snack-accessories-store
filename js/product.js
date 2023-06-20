// console.log("here");
var photo = ["js-img/nuts/003-Box-Nuts.jpg", "", "images/c8.jpg", "images/c4.jpg", "images/c5.webp", "images/c6.webp", "images/c7.jpg", "images/c3.jpg", "images/c9.jpg", "images/c10.jpg", "images/c11.jpg", "images/c12.jpg", "images/c13.jpg", "images/c14.jpg"];
var imageTag = document.querySelector("#pc");
const my = setInterval(clickRight, 6000);
var count = 0;

function clickRight(){
    count++;
    if(count >= photo.length){
        count = 0;
        imageTag.src = photo[count];
    }
    else{
        imageTag.src = photo[count];
    }
}
function clickLeft(){
    count--;
    if(count < 0){
        count = photo.length - 1;
        imageTag.src = photo[count];
    }
    else{
        imageTag.src = photo[count];
    }  
}