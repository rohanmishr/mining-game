//main process
function tick(){
    try{
        $("#money")[0].innerHTML = `$${Profile.money}`;
        $("#research")[0].innerHTML = `${Profile.research} RP`;
        Profile.money++;
    }catch(e){
        alert(e);
    }
}

setInterval(() => {
    tick();
}, 1);