var spanSecondLeft = document.getElementById("second");
setTimeout(function(){
    window.location.reload(1);
}, 3000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown() {
    // console.log('refresh in 3 seconds');
    spanSecondLeft.innerText = '3 senconds';
    await sleep(1000);
    // console.log('refresh in 2 seconds');
    spanSecondLeft.innerText = '2 senconds';
    await sleep(1000);
    // console.log('refresh in 1 seconds');
    spanSecondLeft.innerText = '1 sencond';
    await sleep(1000);
}

countdown();