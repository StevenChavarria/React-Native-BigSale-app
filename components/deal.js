import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { formatPrice } from '../utils';

export default Deal = ({ deal, onPress }) => {

    const handlePress = () => {
        onPress(deal.key);
    }
   
    return (
        <TouchableOpacity style={styles.deal} onPress={handlePress}>
            <Image style={styles.image} source={{ uri: Object.values(deal.media)[0] }} />
            <View style={styles.info}>
                <Text style={styles.title}>{deal.title}</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>{formatPrice(deal.price)}</Text>
                    <Text style={styles.cause}>{deal.cause.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
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