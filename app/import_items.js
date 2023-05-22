//get items from csv files
var mines, upgraders;
var tempArr = [];
$("#loader").load("../items/mines.csv", () => {
    console.log("LOADER: mines.csv loaded");
    mines = Papa.parse($("#loader")[0].innerHTML).data;
    for(var i = 1; i < mines.length-1; i++){
        tempArr.push(new Mine(mines[i][0], mines[i][1], mines[i][2], suffixToNum(mines[i][3]), suffixToNum(mines[i][4]), mines[i][5]));
    }
    mines = tempArr; tempArr = [];
    console.log("LOADER: mines.csv parsed (1/2)");
    //add the mines to the shop if their rarity is shop
    for(var i = 0; i < mines.length; i++){
        if(mines[i].rarity == "common" || mines[i].rarity == "uncommon" || mines[i].rarity == "rare" || mines[i].rarity == "epic" || mines[i].rarity == "legendary" || mines[i].rarity == "mythic"){
            try{Shop.add(mines[i])}catch(e){console.log(e)}
        }
    }
});

$("#loader").load("../items/upgraders.csv", () => {
    console.log("LOADER: shop.csv loaded");
    upgraders = Papa.parse($("#loader")[0].innerHTML).data;
    for(var i = 1; i < upgraders.length-1; i++){
        tempArr.push(new Upgrader(upgraders[i][0], upgraders[i][1], upgraders[i][2], suffixToNum(upgraders[i][3]), upgraders[i][4], upgraders[i][5]));
    }
    upgraders = tempArr; tempArr = [];
    console.log("LOADER: shop.csv parsed (2/2)");
    //add the upgraders to the shop if their rarity is shop
    for(var i = 0; i < upgraders.length; i++){
        if(upgraders[i].rarity == "common" || upgraders[i].rarity == "uncommon" || upgraders[i].rarity == "rare" || upgraders[i].rarity == "epic" || upgraders[i].rarity == "legendary" || upgraders[i].rarity == "mythic"){
            try{Shop.add(upgraders[i])}catch(e){console.log(e)}
        }
    }
});

