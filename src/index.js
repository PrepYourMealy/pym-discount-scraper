const nodeSchedule = require("node-schedule");
const {getProducts} = require("./scrape");
const {updateDiscountsOnServer, checkIfRepoIsEmpty} = require("./util");


getProducts().then((products) => {
    console.log("Start scrape on load");
    updateDiscountsOnServer(products).then(() => {
        console.log("Scrape finished");
    });
})

nodeSchedule.scheduleJob("* * 1 * * 1", async () => {
    console.log("Start scrape on Monday at 8:00 AM");
    const products = await getProducts();
    await updateDiscountsOnServer(products);
});
