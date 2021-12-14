import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { formatPrice } from '../utils';
import api from '../api/dealsService';

export default Detail = ({ deal }) => {
    const [dealDetail, setDealDetail] = useState(deal);
    
    useEffect(() => {
      (async () => {
          const dealDetail = await api.fetchDealDetail(deal.key)
          setDealDetail(dealDetail);
          console.log(dealDetail.user.avatar);
      })();  
    }, []);

    return (
        <View style={styles.deal}>
            <Image style={styles.image} source={{ uri: Object.values(deal.media)[0] }} />
            <View style={styles.info}>
                <Text style={styles.title}>{deal.title}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>{formatPrice(deal.price)}</Text>
                    <Text style={styles.cause}>{deal.cause.name}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    deal: {
        marginHorizontal: 12,
        marginTop: 12,
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc'
    },
    info: {
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderTopWidth: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    footer: {
        flexDirection: 'row',
    },
    cause: {
        flex: 1,
        textAlign: 'right'
    },
    price: {
        flex: 2,
    }
});