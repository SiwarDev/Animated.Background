const animatedSection=document.querySelector('.animated-area');
function createMetors(){
    const meteor=document.createElement('span');
    meteor.style.left=Math.random()*innerWidth+'px';
    animatedSection.append(meteor);
    setTimeout(()=>{
        meteor.remove();
    },2000);
}

setInterval(createMetors,100)