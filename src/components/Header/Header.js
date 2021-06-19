import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import {connect} from  'react-redux'
import * as color from '../../utils/colors'
import PropTypes from 'prop-types';
import pxtodp from '../helpers/pxtodp';
import NavigationService from '../../utils/navigation'
import { onboardStack,authStack } from '../../config/navigator';
import {skiponboard} from '../../modules/common/actions'
const Header = (props) =>{
    const {
        icon,
        skipbtn,
        navigation,
        icon_color,
        ...rest
    } = props;
  
  
   
    const handleskip = () =>{
         props.skiponboard()
    }
    return(
        <View style={styles.container}>
           <View style={styles.arrowView}> 
           <TouchableOpacity onPress={ () => { navigation.goBack(null)}}>
            <Entypo name={icon} size={40} color={icon_color ? icon_color : color.primary} />
            </TouchableOpacity>
            </View>
            
                    <TouchableOpacity onPress={handleskip}  style={styles.skipbtnView}>
                        <Text style={styles.skipbtntext}>{skipbtn}</Text>
                    </TouchableOpacity>
               
        </View>
    )
}

Header.propTypes = {
   icon: PropTypes.string,
   skipbtn: PropTypes.string,
   navigation: PropTypes.object
}
const styles = StyleSheet.create({
    container: {
    
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    arrowView:{
     paddingLeft:5
    },
    skipbtnView:{
      marginRight:17,
      alignContent:'center',
      justifyContent:'center',
      width: pxtodp(35)  
    },
    skipbtntext:{
        color: color.primary,
        fontFamily:'Roboto-Regular',
        fontSize:17
    }
})
export default connect(null,{skiponboard})(Header);