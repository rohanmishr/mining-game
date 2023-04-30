//get items from csv files
var mines, items;
var tempArr = [];
$("#loader").load("../items/mines.csv", () => {
    console.log("LOADER: mines.csv loaded");
    mines = Papa.parse($("#loader")[0].innerHTML).data;
    for(var i = 1; i < mines.length-1; i++){
        tempArr.push(new Mine(mines[i][0], mines[i][1], mines[i][2], mines[i][3], mines[i][4], mines[i][5]));
    }
    mines = tempArr;
    console.log("LOADER: mines.csv parsed (1/2)");
    //add the mines to the shop if their rarity is shop
    for(var i = 0; i < mines.length; i++){
        if(mines[i].rarity == "common" || mines[i].rarity == "uncommon" || mines[i].rarity == "rare" || mines[i].rarity == "epic" || mines[i].rarity == "legendary"){
            try{Shop.add(mines[i])}catch(e){alert(e)}
        }
    }
});

