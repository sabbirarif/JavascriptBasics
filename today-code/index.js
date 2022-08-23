console.log('Test')

function changeBgColor() {
    document.getElementById('changeableParaID').style.color = "white";
    document.getElementById('changeableParaID').style.backgroundColor = "blueviolet";
}

var flag = 0;

function visibleHidden() {
    if (flag == 0) {
        document.getElementById('view-or-hide').style.display = "block";
        document.getElementById('viewBtnId').innerHTML = "Hide";
        flag=1;
    }
    else {
        document.getElementById('view-or-hide').style.display = "none";
        document.getElementById('viewBtnId').innerHTML = "View";
        flag=0;
    }
}

function lightOnBtnFun(){
    document.getElementById('lightOffPic').style.display = "none";
    document.getElementById('lightOnPic').style.display = "block";
}

function lightOffBtnFun(){
    document.getElementById('lightOffPic').style.display = "block";
    document.getElementById('lightOnPic').style.display = "none";
}