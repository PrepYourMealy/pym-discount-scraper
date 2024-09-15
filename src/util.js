const {APPLICATION_SERVER_URL} = require('./env');

const checkIfRepoIsEmpty = async () => {
    try {
        const response = await fetch(APPLICATION_SERVER_URL + '/api/v1/discounts',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            }
        )
        const json = await response.json();
        return json.length === 0
    } catch (error) {
        console.error(error);
        return true
    }
}


const updateDiscountsOnServer = async (discounts) => {
    try {
        const response = await fetch(APPLICATION_SERVER_URL + '/api/v1/discounts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(discounts)
            }
        )
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    checkIfRepoIsEmpty,
    updateDiscountsOnServer
}