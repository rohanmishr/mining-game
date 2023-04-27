class Shop {
    static add(item) {
        if(item.constructor.name == "Mine"){
            $("#shop-mines")[0].innerHTML += `
            <div class="shop-item ${item.rarity}">
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
}