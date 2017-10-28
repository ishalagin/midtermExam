var menuBut = document.getElementById("conrolButton");
var control = document.getElementById("control");
var bgText = document.getElementById("bgText");
var myBg = document.getElementById("background");
var myTitle = document.getElementById("textTitle");
var myDesc = document.getElementById("textDescription");
var imgTitle = document.getElementById("title");
var imgDisc = document.getElementById("decription");
var myColor = document.getElementById("colorBar");
var myPlusSign = document.getElementById("addImg")

var selNewImg = document.getElementById("background")




//Moving the menu up and down function//

function moveMenu(){
    if (control.style.bottom != "0px") {
        control.style.bottom = "0px";
    }
    else {
        control.style.bottom = "-121px";
    }    
}

// changing the Background image//

function changeBg1(fileName){
//    myBg.style.backgroundImage = "url(" + fileName + ")"
    //var inPutStr = ""
    
    if (fileName == "horse"){
        console.log(fileName)
        myBg.style.backgroundImage = "url(img/bg1.jpg)";
    }
    else if (fileName == "night"){
        myBg.style.backgroundImage = "url(img/bg2.jpg)"
    }
    else if (fileName == "mountain"){
        myBg.style.backgroundImage = "url(img/bg3.jpg)"
    }
    else if (fileName.indexOf("epic") > -1){
        myBg.style.backgroundImage = "url(img/bg4.jpg)"
    }
    else{myBg.style.backgroundImage = "url(" + fileName + ")"}
}

// function change the title text//
function changeTitle(text){
//    var val = document.getElementById("imgInput").value
    imgTitle.innerHTML = myTitle.value
}

// change the description
function changeDesc(text){
    imgDisc.innerHTML = myDesc.value
}
// move the image

function moveBody(keyNum){
    var computedStyleImg = window.getComputedStyle(myBg); // gets the style of the "element"
    var imgPosx = parseInt(computedStyleImg.getPropertyValue('background-position-x')); //finds specific style and converts it into intiger to work with parseInt is like int(in python)
    var imgPosy = parseInt(computedStyleImg.getPropertyValue('background-position-y'));
//    alert(keyNum)
    
    if (keyNum == 38){ //up
        myBg.style.backgroundPositionY = imgPosy - 10 + "px"; //offset the image by half the height
    }
    if (keyNum == 40){ //down
        myBg.style.backgroundPositionY = imgPosy + 10 + "px"; 
    }
    if (keyNum == 37){ //left
        myBg.style.backgroundPositionX = imgPosx - 10 + "px"; //if move same direction as key make (-)
    }
    if (keyNum == 39){ //right
        myBg.style.backgroundPositionX = imgPosx + 10 + "px";
    }
}

// increase size
function increaseSize(keyNumb){
//    alert(keyNumb)  
//        - "189" = "187"
    var bgHeight = myBg.offsetHeight
    if (keyNumb == 187) {
        myBg.style.height = bgHeight + 10 + "px";
    }
    else if (keyNumb == 189) {
        myBg.style.height = bgHeight - 10 + "px";

    }
}

// shoving kids into the parent.... this is wierd//////
function lowerImg(){
    var nbgDiv = document.createElement("div");
    var nTitleDiv = document.createElement("div");
    var nDescDiv = document.createElement("div");
    nbgDiv.className = "thumbBG col-xs-12 col-sm-6 col-md-4 col-lg-3";
    nTitleDiv.className = "thumbTitle";
    nDescDiv.className = "thumbDesc";
    nbgDiv.appendChild(nTitleDiv);
    nbgDiv.appendChild(nDescDiv);
    document.getElementById("display").appendChild(nbgDiv);
    nbgDiv.style.cssText = myBg.style.cssText;
    nTitleDiv.innerHTML = imgTitle.innerHTML;
    nDescDiv.innerHTML = imgDisc.innerHTML;
    nTitleDiv.style.cssText = imgTitle.style.cssText;
    nDescDiv.style.cssText = imgDisc.style.cssText;
    
    
    selNewImg = nbgDiv;
    selNewImg = nTitleDiv;
    selNewImg = nDescDiv;

}


// calling the menu function//
menuBut.addEventListener("click", function(){
    moveMenu()
});

// calling input function //
bgText.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        changeBg1(bgText.value)}
    });
// call change title text//
myTitle.addEventListener("keydown", function(ev){
        changeTitle()
});
// call the descriptioin function//

myDesc.addEventListener("keydown", function(ev){
        changeDesc()
});
//  color change //
myColor.addEventListener("change", function(){
    imgTitle.style.color = myColor.value
    imgDisc.style.color = myColor.value
    
});

// move the thing//
document.body.addEventListener("keydown", function(ev){
    moveBody(ev.keyCode)
});

// increase size//
document.body.addEventListener("keydown", function(ev){
    increaseSize(ev.keyCode)
});

myPlusSign.addEventListener("click", function(){
    lowerImg()
})
