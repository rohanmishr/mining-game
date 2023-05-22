class Shop {
    static add(item) {
        if(item.constructor.name == "Mine"){
            //name rarity description cost space
            $("#shop-mines")[0].innerHTML += 
                new Icon(item.name, item.rarity, item.description, numToSuffix(item.cost), item.space)
                .html();
        }

        if(item.constructor.name == "Upgrader"){
            $("#shop-upgraders")[0].innerHTML += 
                new Icon(item.name, item.rarity, item.description, numToSuffix(item.cost), item.space)
                .html();
        }
    }

    static buyItem(itemName) { try {
        //create the item array, used for finding items by name
        var items = [];
        items = items.concat(mines).concat(upgraders) //.concat to add the other categories in the future
        //find the item by name
        for(var i = 0; i < items.length; i++) {
            if(items[i].name == itemName) {
                if(Profile.money < items[i].cost) {
                    alert(`Not enough money! (${items[i].cost})`);
                    return;
                }
                Profile.owned.push(items[i]);
                Profile.money -= items[i].cost;
                Profile.updateDashboard();
                return;
            }
        }   } catch(e) { alert(e) };
    }
}