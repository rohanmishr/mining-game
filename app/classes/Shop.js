class Shop {
    static add(item) {
        if(item.constructor.name == "Mine"){
            $("#shop-mines")[0].innerHTML += `
            <div class="shop-item ${item.rarity}" onclick="Shop.buyItem('${item.name}')">
                ${item.name}
                <div class="shop-item-tooltip-container">
                    <div class="shop-item-tooltip">
                        <div class="shop-item-tooltip-title">${item.name}</div>
                        <div class="shop-item-tooltip-description">${item.description}</div>
                    </div>
                </div>
            </div>
            `;
        }
    }

    static buyItem(itemName) {
        //create the item array, used for finding items by name
        var items = [];
        items = items.concat(mines); //.concat to add the other categories in the future
        //find the item by name
        for(var i = 0; i < items.length; i++) {
            if(items[i].name == itemName) {
                Profile.owned.push(items[i]);
                Profile.money -= items[i].cost;
            }
        }

        Profile.updateDashboard();
    }
}