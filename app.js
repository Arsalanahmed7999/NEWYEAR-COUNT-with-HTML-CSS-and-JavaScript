let counting = new Date('1 Jan, 2023 00:00:00').getTime();
setInterval(() => {

    let now = new Date().getTime();
    let count = counting - now; 
    // let count = 0; 
    let days = Math.floor((count) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((count) % (1000 * 60 * 60 * 24) / (1000 *60 *60));
    let mins = Math.floor((count) % (1000 * 60 * 60 ) / (1000 *60));
    let secs = Math.floor((count) % (1000 * 60) / (1000));

    let newyear = `${days}d ${hours}h ${mins}m ${secs}s`
    let newYEAR = document.querySelector('.newyear');
    if(count==0){
    newYEAR.innerHTML = 'HAPPY NEWYEAR';
    newYEAR.classList.add('animation');
    }
    else{
    newYEAR.innerHTML = newyear;
    }

    



}, 1000);