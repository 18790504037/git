var sjCode="";
$(document).ready(function(){
    randomTest();
    $(".code").on('click',function() {
        randomTest();
    })
})

var arrayTest= ['A','B','C','D','E','F','G','H','I','J','K',
            'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
             'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
              't','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
//获取span标签
var span = document.getElementsByTagName('span');
//定义一个函数,randomTest()
function randomTest(){
//表示循环几次,循环出多少个数值.
sjCode="";
    for(var i=0;i<4;i++){
    //parseInt()函数将Math.random()函数中随机出的值乘以数组的长度,它的值的范围就是0——Array.length-1,此时取出的值为数组的下标.
    var num = parseInt(Math.random()*arrayTest.length);
    //将arrayTest中的值取出,利用上面取出的下标num,此时取出的值为数组中真正的值,而不是它的下标.
    var code = arrayTest[num];
    //将上面取到的<span>元素通过innerHTML赋值code
    span[i].innerHTML=code;
    //将随机出的值通过style.color赋予颜色,这里使用了自己写的一个封装函数randomColor()，
    span[i].style.color=randomColor();
    sjCode+=code;
    }
    console.log(sjCode);
}
function randomColor(){
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);
    var rgb = "rgb("+r+","+g+","+b+")";
    return rgb;
}

function check(){ 
    if($("#confirm_password").val()!=$("#password").val()) 
    { 
        alert("密码不一致") 
        $("#password").val(""); 
        $("#confirm_password").val(""); 
        return false;
    } 
    else{
        return true;
    }
}
var countdown=60; 
function settime(obj) { 
    if (countdown == 0) { 
        $(obj).css("pointer-events", "auto"); 
        $(obj).html("获取验证码"); 
        countdown = 60; 
        return;
    } else {
        $(obj).css("pointer-events", "none"); 
        $(obj).html("重新发送(" + countdown + ")"); 
        countdown--; 
     } 
setTimeout(function() { 
    settime(obj)
     }
     ,1000) 
}