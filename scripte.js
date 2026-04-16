let container = document.querySelector('.container');
let btn = document.querySelector('.btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time')

btn.onclick = function(){
    let score = 0;
    let time = 10;
    container.innerHTML ="";
    let interval =setInterval(function showTarget(){
        let target = document.createElement('img');
        target.id="target";
        target.src="silly.jpg";
        container.appendChild(target);
        target.style.top = Math.random()* (500 - target.offsetHeight)+'px';
        target.style.left = Math.random()* (600 - target.offsetWidth) + 'px';

        setTimeout(()=>{
            target.remove();
        },2000)

        target.onclick = function(){
            score += 1;
            target.style = 'none';

        }

        time-=1;

        scoreContainer.innerHTML = `Score : ${score}`;
        timeContainer.innerHTML = `time : ${time}`;


        if(time==0){
            clearInterval(interval);
            container.innerHTML = `le jeux est terminer votre score est ${score}`;
        }
    }, 1000);
}