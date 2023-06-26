import React from "react";
import {Text, Image, View, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
    return <View style={styles.resultStyle}>
            <Image
                style={styles.imageStyle}
                source={{uri: result.image_url}}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} reviews</Text>
            <Text>{result.location.city}</Text>
        </View>
};

const styles = StyleSheet.create({
    resultStyle: {
        flexDirection: 'column',
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 20
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 5
    },
    nameStyle: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;