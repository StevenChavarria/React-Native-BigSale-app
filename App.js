import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './api/dealsService'
import Deals from './components/deals'


export default function App() {
  const [deals, setDeals] = useState([]);


  useEffect(() => {
    (async () => {
      const deals = await api.fetchInitialDeals();
      //console.info(deals);
      setDeals(deals);
    })();
  }, []);


  return (
    <View style={styles.container}>
      {deals.length > 0 ?
        <Deals />
        : <Text styles={styles.header}>BigSale app!</Text>}
      <StatusBar style="auto" />
    </View>
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
