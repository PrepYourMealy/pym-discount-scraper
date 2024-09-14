const APPLICATION_SERVER_URL = process.env.APPLICATION_SERVER_URL;

if (!APPLICATION_SERVER_URL) {
    throw new Error("APPLICATION_SERVER_URL is not defined");
}

module.exports ={
    APPLICATION_SERVER_URL
}