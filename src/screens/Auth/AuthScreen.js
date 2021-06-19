import React from 'react';
import { View, Text, StyleSheet, Dimensions,Image, TouchableOpacity } from 'react-native';
import * as color from '../../utils/colors'
import {connect} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import * as strings from '../../utils/strings';
import Grad_Wavy from '../../components/wavy_gradient/wavy_gradient';
import Grad_Wavy3 from '../../components/wavy_gradient/wavy_gradient3'
import Header from '../../components/Header/Header';
import NavigationService from '../../utils/navigation'
import { authStack } from '../../config/navigator';
import {backtoonboard} from '../../modules/common/actions'
import {setAnonymous} from '../../modules/auth/actions'
import {isGettingStartSelector} from '../../modules/common/selectors';


const AuthScreen = (props) => {

    const handlebacktoonboard = () =>{
        props.backtoonboard()
    }

    console.log( 'props at authscreen',props)

    const handleAnonymoususer = () => {
        console.log('came to anoymous')
    }
    return (
        <View style={styles.container}>
           

                <Grad_Wavy customStyles={styles.svgCurve} />
            
            {/* { 
            props.isGettingStart == false ? (
                <View style={styles.inplacearrow} />
               
               
            ) 
            :( */}
                <View style={styles.arrowView}> 
                <TouchableOpacity onPress={ handlebacktoonboard}>
                 <Entypo name={'chevron-left'} size={40} color={color.full_white} />
                 </TouchableOpacity>
                 </View>
{/*                 
            ) 
           } */}

                {/* <View style={styles.headerView}>
                    <Header icon={'chevron-left'} icon_color={color.white} />
                </View> */}

                <View style={styles.bodyView}>
                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={()=> NavigationService.navigate(authStack.login)} style={styles.signinbtn}>
                            <Text style={styles.signintext}>{strings.signin}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>NavigationService.navigate(authStack.Register)} style={styles.signupbtn}>
                            <Text style={styles.signuptext}>{strings.signup}</Text>
                        </TouchableOpacity>

                        <View style={styles.orView}>
                            <Text style={styles.ortext}>{strings.or}</Text>
                        </View>

                        <TouchableOpacity onPress={handleAnonymoususer}  style={styles.SKIP_the_sign_inView}>
                            <Text style={styles.SKIP_the_sign_intxt}>{strings.SKIP_the_sign_in_and_sign_up}</Text>
                        </TouchableOpacity>

                        
                   
                    
                    </View>
                    <View style={styles.footerView}>
                    <Grad_Wavy3 customStyles={styles.svgCurve} />
                    <View style={{padding:15}}>
                    <Image source={require('../../../src/Assets/onboard/white_workinbuddy_logo_2021_transparent_1.png')} style={{height:130,width:130}} />
                   </View>
                </View>

                   

                </View>

                
         
        </View>
    );
};

const styles = StyleSheet.create({
    arrowView:{
        paddingLeft:5,
        marginTop: 44,
       },
       inplacearrow:{

       },
    container: {
        height: '100%',
        width: '100%',
        flexDirection:'column',
         justifyContent:'space-between',
        backgroundColor: color.white,
        
    },
    nestedcontainer: {
       
      
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
    headerView: {
        marginTop: 44,
        height: 35,
        
    },
    bodyView: {
    
     
     
    
    },
    buttonView: {
        
       paddingTop:'20%'

    },
    signinbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 300,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: color.primary
    },
    signupbtn: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 300,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 20,

    },
    signintext: {
        color: color.white,
        fontFamily:'Roboto-Regular',
        fontSize: 18
    },
    signuptext: {
        color: color.primary,
        fontFamily:'Roboto-Regular',
        fontSize: 18
    },
    orView: {
        alignItems: 'center',
        marginTop:15
    },
    ortext: {

    },
    SKIP_the_sign_inView: {
       marginTop:15,
        alignItems: 'center'
    },
    SKIP_the_sign_intxt: {
        color: color.primary
    },
    footerView: {
     marginTop:30,
     flexDirection:'row',
     justifyContent:'flex-end',
     alignItems:'flex-end',
     
    }

})

const mapStateToProps = state => {
    return {
           isGettingStart: isGettingStartSelector(state),
       }
   
   }

export default connect(mapStateToProps,{ setAnonymous ,backtoonboard })(AuthScreen);