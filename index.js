const whiteFace=document.querySelector('.closed');
const blackFace=document.querySelector('.open');

whiteFace.addEventListener('click',()=>{
    if(blackFace.classList.contains('open'))
    {
        blackFace.classList.add('active');
        whiteFace.classList.remove('active')
    }
})

blackFace.addEventListener('click',()=>{
    if(whiteFace.classList.contains('closed')){
        whiteFace.classList.add('active');
        blackFace.classList.remove('active')
    }
})