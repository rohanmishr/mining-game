//get items from csv files
var mines, items;
$("#loader").load("../items/mines.csv", () => {
    mines = $("#loader")[0].innerHTML;
    console.log("LOADER: mines.csv loaded");
});

