const nodeSchedule = require("node-schedule");
const {getProducts} = require("./scrape");
const {updateDiscountsOnServer, checkIfRepoIsEmpty} = require("./util");


checkIfRepoIsEmpty().then((isEmpty) => {
    console.log("Repo is empty: ", isEmpty);
    if (isEmpty) {
        console.log("Start scrape on server start");
        getProducts().then((products) => {
            updateDiscountsOnServer(products).then(() => {
                console.log("Scrape finished");
            });
        });
    }
})

nodeSchedule.scheduleJob("* 30 8 * * 1", async () => {
    console.log("Start scrape on Monday at 8:00 AM");
    const products = await getProducts();
    await updateDiscountsOnServer(products);
});
