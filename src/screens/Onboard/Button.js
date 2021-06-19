import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import pxtodp from '../../components/helpers/pxtodp';
const FooterButton  = (props) =>{
    const {
        btnTitle,
    } = props;
    return(
        <View  style={styles.container}>
        <TouchableOpacity style={styles.btn}>
            <Text> {btnTitle}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      height:50,
      height: pxtodp(70),
      width:pxtodp(350),
      alignItems:'center' 

    },
    btn:{
       alignItems:'center',
       justifyContent:'center',
        width:'90%',
        height:50,
    }
})
export default FooterButton;