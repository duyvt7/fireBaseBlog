document.addEventListener('DOMContentLoaded', function(){
    const colors = ['red','green', 'blue']
    const btn = document.getElementById('btn')
    const color = document.getElementById('color')

    btn.onclick = function(){
        //get random Number
        const randomNumber = getRandomNumber()
        console.log(randomNumber)
        document.body.style.backgroundColor = colors[randomNumber]
        color.textContent = colors[randomNumber]
    }
    function getRandomNumber(){
        return Math.round (Math.random()*colors.length)
    }
})