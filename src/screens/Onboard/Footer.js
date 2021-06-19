import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import FooterButton from './Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as colors from '../../utils/colors'
const Footer = (props) =>{
    const {
        btnTitle,
        icon,
        containerstyle,
        style,
    } = props;
    return(
        <View style={[
            styles.container,
            containerstyle
            ]}>
         
             <FooterButton btnTitle={btnTitle} icon={icon} />
              
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
        flexDirection:'row',
        backgroundColor: colors.primary
    }
})
export default Footer;