import React,{useEffect} from 'react';
import {View,Text,StyleSheet,PixelRatio,Image, Dimensions, TouchableOpacity} from 'react-native';
import * as colors from '../../utils/colors'
import * as strings from '../../utils/strings';
import normalize from '../../components/helpers/normaliseText';
import pxtodp from '../../components/helpers/pxtodp';
import AntDesign from 'react-native-vector-icons/AntDesign'
import NavigationService from '../../utils/navigation'
import {onboardStack} from '../../config/navigator'
 

const OnboardScreen = (props) =>{
    const {
        title,
        
    } = props;
    
    
   
    
    return(
        <View style={styles.container}>

           <View style={styles.titleView}>
            <Text style={styles.title}> {strings.workinbuddy} </Text>
            </View>

            <View style={styles.logoView}>
             <Image 
             source={require('../../Assets/onboard/workinbuddy_brand_mark_2021_transparent.png')}
             style={{height:pxtodp(180),width:pxtodp(180)}}
             />
            </View>

            <View style={styles.descriptionView}>
                <Text style={styles.Desc}>{strings.A_coworking_space_for_your_business}</Text>
            </View>

            <View style={styles.footerBtnView}>
              <TouchableOpacity onPress={() => NavigationService.navigate(onboardStack.onboard1)}>
               <View style={styles.getstartbtn}>
                 <View>
                 <Text style={styles.getstarttext}>Get Started</Text>
                 </View>
                 <View style={styles.iconstyle}>
                 <AntDesign name={'arrowright'} size={40} color={'white'} />
                 </View>
               </View>
              </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      justifyContent:'space-between'
    },
    titleView:{
       width: pxtodp(268),
       height:pxtodp(44),
       
      marginTop:pxtodp(170),
      alignSelf:'center',
      alignItems:'center'
       
       
       
    },
    logoView:{
      marginTop:pxtodp(25),
      
      width: pxtodp(200),
      height: pxtodp(200),
      alignSelf:'center',
     

    },
    title:{
       fontSize:normalize(32),
       
       color: '#FF6000',
       fontFamily: 'Peralta-Regular' 
    },
    Desc:{
        color: '#FF6000',
         fontSize: 16,
         fontFamily:'Roboto-Regular',
         opacity:0.6
    },
    descriptionView:{
       
         alignItems:'center',
         marginTop:10,
        
         height: pxtodp(21),
         width: pxtodp(285),
         alignSelf:'center'
    },
    footerBtnView:{
      borderRadius:15,
      height:pxtodp(60),
      width: pxtodp(350),
      marginTop:70,
      marginBottom:20
    },
    getstarttext:{
     fontSize: 24,
     color:colors.white 
    },
    getstartbtn:{
      borderRadius:15,
      backgroundColor:colors.primary,
      flexDirection:'row',
      height: 55,
      width: '95%',
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center'
    },
    iconstyle:{
    
      marginLeft:20
    }
    
   
    
})
export default OnboardScreen;