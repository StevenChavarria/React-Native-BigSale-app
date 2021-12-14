import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './api/dealsService'
import Deals from './components/deals'
import Detail from './components/detail'


export default function App() {
  const [deals, setDeals] = useState([]);
  const [currentDealId, setCurrentDealId] = useState(null);

  useEffect(() => {
    (async () => {
      const deals = await api.fetchInitialDeals();
      //console.info(deals);
      setDeals(deals);
    })();
  }, []);

  const getCurrentDeal = () => deals.find(deal => deal.key === currentDealId);

  return (
    <>
      {
        currentDealId ? (
          <Detail deal={getCurrentDeal()} />
        ) : deals.length > 0 ? (
          <Deals deals={deals} onItemPress={setCurrentDealId} />
        ) : (
          <View style={styles.container}>
            <Text style={styles.header}>BigSale App! </Text>
          </View>
        )
      }
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40
  },
});
