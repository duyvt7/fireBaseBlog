document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    const value = document.querySelector('#value')
    const btns = document.querySelectorAll('.btn')
    btns.forEach(function (item){
        item.addEventListener('click',function(e){
            const style =   e.currentTarget.classList
            if(style [1] === 'increase'){
                count++;
            } else if(style [1]=== 'decrease'){
                count--;
            } else {
                count = 0;
            }
            if(count > 0){
                value.style.color = 'green'
            } else if (count < 0){
                value.style.color = 'red';
            }else {
                value.style.color = 'black'
            }
            value.innerHTML = count

        })
    })
})