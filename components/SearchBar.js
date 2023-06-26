import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) =>  {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search" style={styles.inputStyle}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        marginBottom: 10,
        backgroundColor: '#F0EEEE',
        height: 40,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection:'row'
    },
    inputStyle: {
        flex: 1 // take as much space as it can // fixes the box dynamically increaasing
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;