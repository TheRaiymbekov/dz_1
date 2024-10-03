const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[A-Za-z\d._%+]+@gmail\.com$/

gmailButton.onclick =  () =>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

const childBlock = document.querySelector('.child_block')

let left = 0

const right = 450

function slide() {
    if (left < right){
        left++
        childBlock.style.left = left + 'px';
        requestAnimationFrame(slide)
    }
}
slide()