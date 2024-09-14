const {APPLICATION_SERVER_URL} = require('./env');

const checkIfRepoIsEmpty = async () => {
    try {
        const response = await fetch(APPLICATION_SERVER_URL + '/discounts',
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
    const response = await fetch(APPLICATION_SERVER_URL + '/discounts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(discounts)
        }
    )
    // TODO better handle or add retry logic
    try {
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = {
    checkIfRepoIsEmpty,
    updateDiscountsOnServer
}