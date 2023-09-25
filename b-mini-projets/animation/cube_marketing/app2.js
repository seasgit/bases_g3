const cube =document.querySelector('.cube');

const btns =  document.querySelector('.grid');

btns.addEventListener('click',(e)=> {
    const btn = e.target;
    const x = btn.dataset.x;
    const y = btn.dataset.y;
    // console.log(`rotatex(${x}deg) rotatey(${y}deg)`);
    cube.style.transform = `rotatex(${x}deg) rotatey(${y}deg)`;
})