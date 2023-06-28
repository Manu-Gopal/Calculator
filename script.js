let flag=0
let result=0
let text=0
let txt=0

function clicks(val){
    if(flag==1 || flag==2){
        flag=0
        document.getElementById("screen").value=""
    }
    document.getElementById("screen").value+=val
}

function click_op(op){
    if(flag==1){
        flag=0
        document.getElementById("screen").value=""
        document.getElementById("screen").value=result
        document.getElementById("screen").value+=op
    }
    else if(flag==2){
        flag=0
        document.getElementById("screen").value="0"
        document.getElementById("screen").value+=op
    }
    else{
        document.getElementById("screen").value+=op
    }
}

function clrscr(){
    document.getElementById("screen").value="0"
    flag=2
}

function eqclick(){
    text=document.getElementById("screen").value
    result=eval(text)
    document.getElementById("screen").value=result
    flag=1
}

function answer(){
    if(flag==2 || flag==1){
        flag=0
        document.getElementById("screen").value=""
        document.getElementById("screen").value=result
    }
    else{
        flag=0
        document.getElementById("screen").value+=result
    }
}