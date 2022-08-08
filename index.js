var ranNum1=Math.ceil(Math.random()*6);
var randomImgSrc1="images/"+"dice"+ranNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImgSrc1);

var ranNum2=Math.ceil(Math.random()*6);
var randomImgSrc2="images/"+"dice"+ranNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);

if(ranNum1>ranNum2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(ranNum2>ranNum1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}