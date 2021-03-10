const music = document.querySelector('#music');
const music1 = document.querySelector('#music1');
const burger = document.querySelector('#burger');

burger.addEventListener('click', ()=>{
    if(music.classList.contains('hidden')){
       music.classList.remove('hidden');
    }else{
        music.classList.add('hidden');
    }
})

burger.addEventListener('click', ()=>{
    if(music1.classList.contains('hidden')){
       music1.classList.remove('hidden');
    }else{
        music1.classList.add('hidden');
    }
})