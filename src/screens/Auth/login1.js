import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import * as color from '../../utils/colors'
import * as strings from '../../utils/strings';
import Grad_Wavy from '../../components/wavy_gradient/wavy_gradient';
import Grad_Wavy3 from '../../components/wavy_gradient/wavy_gradient3'
import Header from '../../components/Header/Header';
import NavigationService from '../../utils/navigation'
import { authStack } from '../../config/navigator';
import Input from '../../containers/input/Input';


class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            Email: '',
            Password: '',
            invalidecred: '',
            loading: 'false'


        }
    }

    render() {
        return (

            <View style={styles.container}>


                <Grad_Wavy customStyles={styles.svgCurve} />

                



                <View style={styles.bodyView}>
                    
                    <View>
                        <Image source={require('../../../src/Assets/onboard/white_workinbuddy_logo_2021_transparent_1.png')} style={{ height: 130, width: 130 }} />
                    </View>
               
                    
                      
                        <View style={styles.signinView}>
                            <Text style={styles.signintxt}>{strings.signin}</Text>
                        </View>
                        <View style={styles.email}>
                            <View style={styles.emailView}>
                                <Text style={styles.emailtxt}>Email</Text>
                            </View>
                            <Input

                                value={this.state.email}
                                placeholder={strings.email}
                                onChangeText={value => this.setState({ email: value })}
                                width={'90%'}
                                height={55}
                                color={color.grey}

                                borderRadius={10}
                                borderWidth={1}
                                bordercolor={color.primary}
                                placeholderTextColor={color.grey}
                                selectionColor={color.grey}


                            />
                        </View>


                        <View style={{ marginTop: 10 }}>
                            <View style={styles.emailView}>
                                <Text style={styles.emailtxt}>Password</Text>
                            </View>
                            <Input
                                placeholder={strings.password}
                                value={this.state.password}
                                onChangeText={value => this.setState({ password: value })}
                                color={color.grey}
                                autoCorrect={false}
                                width={'90%'}
                                height={55}
                                secureTextEntry
                                borderRadius={10}
                                borderWidth={1}
                                bordercolor={color.primary}

                                placeholderTextColor={color.grey}
                                selectionColor={color.grey}
                            />
                        </View>
                        <View style={styles.Forgot_PasswordView}>
                            <Text style={styles.Forgot_Passwordtxt}>{strings.Forgot_Password}</Text>
                        </View>


                        <View style={styles.socialView}>
                            <View style={styles.socialViewinside}>
                                <View>
                                    <Image source={require('../../Assets/auth/google_PNG19635.png')} style={{ height: 40, width: 40 }} />
                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Image source={require('../../Assets/auth/facebook.png')} style={{ height: 40, width: 40 }} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.footerView}>
                            <Grad_Wavy3 customStyles={styles.svgCurve} />

                            <View style={styles.footerinfo}>
                                <View style={{ justifyContent: 'flex-end' }}>
                                    <TouchableOpacity>
                                        <Text>{strings.New_Here_Register}</Text>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity onPress={() => NavigationService.navigate(authStack.login)} style={styles.signinbtn}>
                                    <Text style={styles.signintext}>{strings.signin}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        

                    </View>



                </View>

            </View>

        );
    };
};

const styles = StyleSheet.create({
    container: {

        backgroundColor: color.white,




    },

    svgCurve: {
        position: 'absolute',
        width: '100%'
    },
    headerView: {

        marginTop: 44,
        height: '7%',

    },
    bodyView: {
        borderWidth: 1,
        height: '92%',
     


    },
    buttonView: {


        marginTop: '0%',
        paddingTop: '20%'

    },
    signinView: {

        width: '90%',
        alignSelf: 'center'
    },
    signintxt: {
        color: color.primary,
        fontFamily: 'Roboto-Regular',
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20
    },
    emailView: {

        height: 20,
        width: '90%',
        alignSelf: 'center'
    },
    emailtxt: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        color: color.primary
    },
    footerView: {
        height: '35%',
        borderWidth: 1,
      

        alignItems: 'center',
        justifyContent: 'center'

    },
    signinbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '40%',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.white,
        backgroundColor: color.primary
    },
    signintext: {
        color: color.white,
        fontFamily: 'Roboto-Regular',
        fontSize: 18
    },
    Forgot_PasswordView: {
        marginTop: '5%',
        width: '90%',
        alignSelf: 'center',



    },
    Forgot_Passwordtxt: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        fontWeight: 'bold',
        color: color.primary
    },
    socialView: {


        width: '90%',
        alignSelf: 'center'
    },
    socialViewinside: {
        flexDirection: 'row',

        marginTop: '5%',
        width: '50%'
    },
    footerinfo: {
        width: '90%',
        paddingTop:50,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})
export default LoginScreen;