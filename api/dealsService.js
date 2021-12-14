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
    },

    async fetchDealDetail(dealId){
     try {
         const response = await fetch(apiHost + `/deal-details/${dealId}.json`);
         const json = await response.json();
         return json;
     } catch (error) {
         console.error(error)
     }
    },
}

