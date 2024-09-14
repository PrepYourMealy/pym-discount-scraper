const nodeSchedule = require("node-schedule");
const {getProducts} = require("./scrape");
const {updateDiscountsOnServer, checkIfRepoIsEmpty} = require("./util");


async function main() {
    const isRepoEmpty = await checkIfRepoIsEmpty();
    if (isRepoEmpty) {
        console.log("Start scrape on server start");
        const products = await getProducts();
        await updateDiscountsOnServer(products);
    }
}
main();
nodeSchedule.scheduleJob("0 8 * * 1", async () => {
    console.log("Start scrape on Monday at 8:00 AM");
    const products = await getProducts();
    await updateDiscountsOnServer(products);
});