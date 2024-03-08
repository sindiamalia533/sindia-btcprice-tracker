const axios = require('axios');

const URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

async function getBitcoinPrice() {
    try {
        const response = await axios.get(URL);
        const price = response.data.bitcoin.usd;
        console.log(`Giá hi?n t?i c?a Bitcoin là: $${price}`);
    } catch (error) {
        console.error('Có l?i x?y ra khi l?y giá Bitcoin:', error);
    }
}

getBitcoinPrice();
