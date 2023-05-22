class Profile {
    static money = 50;
    static research = 0;
    static owned = [];
    static capacity = 0;
    static maxCapacity = 100;

    static updateDashboard() {
        $("#mines")[0].innerHTML = "";
        $("#upgraders")[0].innerHTML = "";
        for (var i = 0; i < Profile.owned.length; i++) {
            if (Profile.owned[i].constructor.name == "Mine") {
                var item = Profile.owned[i];
                $("#mines")[0].innerHTML += 
                new Icon(item.name, item.rarity, item.description, item.cost, item.space)
                .html();
            } else if (Profile.owned[i].constructor.name == "Upgrader") {
                var item = Profile.owned[i];
                $("#upgraders")[0].innerHTML +=
                new Icon(item.name, item.rarity, item.description, item.cost, item.space)
                .html();
            }
        }
    }
}

setInterval(() => {
    //main money tick
    Profile.capacity = 0;
    var p = 0;
    for(let i = 0; i < Profile.owned.length; i++){
        if(Profile.owned[i].constructor.name == "Mine"){
            p += parseInt(Profile.owned[i].value);
        }
        Profile.capacity += parseInt(Profile.owned[i].space);
    }
    //there has to be different loops so that the upgrade is applied after the mine value is calculated
    for(let i = 0; i < Profile.owned.length; i++){
        if(Profile.owned[i].constructor.name == "Upgrader"){
            p *= parseFloat(Profile.owned[i].multiplier);
        }
    }
    Profile.money += p;
}, 1000);