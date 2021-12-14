import { StyleSheet, Text, View, FlatList} from "react-native";
import React from 'react';
import Deal from './deal'

export default function Deals({ deals, onItemPress }) {
  return (
    <View style={styles.list}>
      {/* {deals.map(deal =>
        <Text key={deal.key}>{deal.title}</Text>
      )} */}
      <FlatList data={deals} renderItem={({ item }) => (
        // <Text>{item.title}</Text>
        <Deal deal={item} onPress={onItemPress} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    paddingTop: 50,
  }
});
