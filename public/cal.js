document.addEventListener('DOMContentLoaded', function(){
    const result = document.getElementById('result')
    const numbers = document.getElementsByClassName('button')
    for (let number of numbers){
        number.addEventListener('click', function(){
            result.innerHTML +=this.value
        })
    }
    document.getElementById('equal').onclick=function(){
        let res = result.innerHTML  
        let output = eval(res)
        result.innerHTML = output
    }
    // function equal(){
    //     let res = result.innerHTML  
    //     let output = eval(res)
    //     result.innerHTML = output
    // }
    document.getElementById('clear').onclick=function(){
        result.innerHTML = ''
    }
    // function clean(){
    //     result.innerHTML = ''
    // }
    document.getElementById('del').onclick=function(){
        let res = result.innerHTML
        result.innerHTML = res.substring(0,res.length-1)
    }
    // function undo(){
    //     let res = result.innerHTML
    //     result.innerHTML = res.substring(0,res.length-1)
    // }
})