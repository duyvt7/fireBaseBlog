document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter')
    const reset = document.getElementById('reset')
    const decrease = document.getElementById('btn-decrease')
    const increase = document.getElementById('btn-increase')
    let x = 0
    let x1 =0
    decrease.onclick = function(){
        x-=1
        counter.innerHTML = x
    }
    increase.onclick= function(){
        x+=1
        counter.innerHTML = x;
    }
    reset.onclick=function(){
        counter.innerHTML =x1;
    }
})