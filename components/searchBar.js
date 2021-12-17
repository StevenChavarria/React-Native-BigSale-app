import React from "react";
import { StyleSheet, TextInput} from 'react-native';

export default SearchBar = ({onChange}) => {
    return (
      <TextInput style={styles.input} placeholder="Search Deal" onChangeText={onChange}></TextInput>
    )
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginHorizontal: 12,
    },
});