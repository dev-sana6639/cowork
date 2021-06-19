
import React from 'react';
import { useDispatch } from 'react-redux';
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native';
import Header from '../../../components/Header/Header';
import pxtodp from '../../../components/helpers/pxtodp';
import * as string from '../../../utils/strings';
import * as color from '../../../utils/colors';
import {onboardStack,authStack,rootStack} from '../../../config/navigator'
import NavigationService from '../../../utils/navigation'
import { SafeAreaView } from 'react-native-safe-area-context';
import {isgettingStartended} from '../../../modules/common/actions'


const OnboardScreen3 = (props) =>{

    const dispatch = useDispatch();

    const handlelastonboard = () => {
        dispatch(isgettingStartended())
    }
  
    return (
        <View style={styles.container}>
          
            <View style={styles.headerView}>
                <Header navigation={props.navigation}  icon={'chevron-left'} skipbtn={'Skip'} />
            </View>
            <View style={styles.bodyView}>
               <Image source={require('../../../Assets/onboard/onboard_three-01.png')} style={styles.imagestyle} />
            </View>
            <View style={styles.titleView}>
               <Text style={styles.titletext}>{string.Start_your_work}</Text>
            </View>
            <View style={styles.descriptionView}>
                <Text style={styles.descriptiontext}>{string.description_onboard3}</Text>

            </View>

            <View style={styles.footerView}>

            <View style={styles.linedotView}>
               
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.line} />
                </View>

               <TouchableOpacity onPress={ handlelastonboard} style={styles.nextbtn}>
                   
                   <Text style={styles.nextbtntext}>Next</Text>
               </TouchableOpacity>
            </View>
           
        </View>
    )
}



const styles = StyleSheet.create({
    dot:{
        height:10,
        width:10,
        backgroundColor:color.secondary,
        marginLeft:3,
        borderRadius:6
    },
    linedotView:{
        width:100,
       
        alignItems:'center',
        flexDirection:'row'

    },
    line:{
        height:10, 
        width:30,
        marginLeft:3,
        borderRadius:6,
        backgroundColor: color.primary  
    },
    container:{
        height:'100%',
        width:'100%',
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between'
        
    },
    headerView:{
        marginTop: 44,
        height: 35,  
    },
    bodyView:{
      
    },
    imagestyle:{
        height:415,
        width:'100%',
        
    },
    titleView:{
        
        width:pxtodp(192),
        height:pxtodp(28),
        marginTop:pxtodp(46),
        marginLeft: pxtodp(20)
    },
    titletext:{
        fontFamily:'Roboto-Regular',
        fontWeight:'bold',
        fontSize:20,
        color: color.primary
    },
    descriptionView:{
       
        marginTop: 25,
        alignSelf:'center',
        width:pxtodp(340)
    },
    descriptiontext:{
        fontFamily:'Roboto-Regular',
        fontSize:14,
        opacity:0.5 
    },
  footerView:{
      
    marginTop:50,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%',
    alignSelf:'center',
    marginBottom:30
  },
  nextbtn:{
      backgroundColor: color.primary,
      height:50,
      width:130,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      marginRight:25
  },
  nextbtntext:{
      fontFamily:'Roboto-Regular',
      fontWeight:"400",
      fontSize: pxtodp(18),
      color:color.white
  }
})
export default OnboardScreen3;