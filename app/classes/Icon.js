class Icon {
    constructor(name, rarity, description, cost, space) {
        this.name = name;
        this.rarity = rarity;
        this.description = description;
        this.cost = cost;
        this.space = space;
    }

    html() {
        var html = 
        `<div class="shop-item ${this.rarity}" onclick="Shop.buyItem('${this.name}')">
            ${this.name}
            <div class="shop-item-tooltip ${this.rarity}">
                <h3 class="shop-item-tooltip-title">${this.name}</h3>
                <div class="shop-item-tooltip-rarity">${toDisplay(this.rarity)}</div>
                <p class="shop-item-tooltip-description">${this.description}</p>
                <p class="shop-item-tooltip-cost">Cost: ${this.cost}</p>
                <p class="shop-item-tooltip-space">Space usage: ${this.space}</p>
            </div>
        </div>
        `;
        return html;
    }
}