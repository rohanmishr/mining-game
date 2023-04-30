class Profile {
    static money = 50;
    static research = 0;
    static owned = [];

    static updateDashboard() {
        $("#mines")[0].innerHTML = "";
        for (var i = 0; i < Profile.owned.length; i++) {
            if(Profile.owned[i].constructor.name == "Mine") {
                $("#mines")[0].innerHTML += `
                <h1>${Profile.owned[i].name}</h1>
                `
            }
        }
    }
}