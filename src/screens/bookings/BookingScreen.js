import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const BookingScreen = () =>{
    return(
        <View style={styles.container}>
            <Text>this is Booking Screen</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default BookingScreen;