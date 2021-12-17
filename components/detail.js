import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { formatPrice } from '../utils';
import api from '../api/dealsService';

export default Detail = ({ deal, onBack }) => {
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
            <TouchableOpacity onPress={onBack}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
            <Image style={styles.image} source={{ uri: Object.values(dealDetail.media)[0] }} />
            <View style={styles.detail}>
                <View>
                    <Text style={styles.title}>{dealDetail.title}</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.info}>
                        <Text style={styles.price}>{formatPrice(dealDetail.price)}</Text>
                        <Text style={styles.cause}>{dealDetail.cause.name}</Text>
                    </View>
                    {
                        dealDetail.user &&
                        <View style={styles.user}>
                            <Image source={{ uri: dealDetail.user.avatar }} style={styles.avatar} />
                            <Text>{dealDetail.user.name}</Text>
                        </View>
                    }
                </View>
                <View style={styles.description}>
                    <Text>{dealDetail.description}</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    deal: {
        marginHorizontal: 12,
        marginTop: 50,
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
    },
    detail: {
        borderColor: '#bbb',
        borderWidth: 1,
    },
    title: {
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: 'rgba(237, 149, 45, 0.4)',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15,
    },
    info: {
        alignItems: 'center',
    },
    user: {
        alignItems: 'center',
    },
    cause: {
        marginVertical: 10,
    },
    price: {
        fontWeight: 'bold',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    description: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderStyle: 'dotted',
        margin: 10,
        padding: 10,
    },
    back: {
        marginBottom: 5,
        color: '#22f', 
        marginLeft: 10,
    },
});