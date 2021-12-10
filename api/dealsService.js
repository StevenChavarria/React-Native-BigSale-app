const apiHost = 'https://bigsale-6b245-default-rtdb.firebaseio.com';

export default {
    async fetchInitialDeals() {
        try {
            let response = await fetch(apiHost + '/deals.json');
            let json = await response.json();
            return Object.values(json);
        } catch (error) {
            console.error(error);
        }
    }
}