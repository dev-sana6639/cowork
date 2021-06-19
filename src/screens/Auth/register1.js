import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import * as color from '../../utils/colors'
import * as strings from '../../utils/strings';
import Grad_Wavy from '../../components/wavy_gradient/wavy_gradient1';
import Grad_Wavy3 from '../../components/wavy_gradient/wavy_gradient3'
import Header from '../../components/Header/Header';
import NavigationService from '../../utils/navigation'
import { authStack } from '../../config/navigator';
import Input from '../../containers/input/Input';
import { RegisterService } from '../../modules/auth/services'
import { signup } from '../../modules/auth/actions'


class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            phone_numer: '',
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            Email: '',
            Password: '',
            invalidecred: '',
            loading: false


        }
    }

    handleregister = async () => {
        const {
            fullname,
            phone_numer,
            email,
            password,
        } = this.state;


        this.setState({ loading: true })
        console.log('register started')
        const register = await RegisterService({ fullname, phone_numer, email, password })
        console.log('register done result is:', register)
        if (register.error) {
            this.setState({ invalidecred: register.error })
            this.setState({ loading: false })
            console.log('error is', register.error)
        } else {

            this.props.signup(register)
            console.log('register successfully')
            this.setState({ loading: false })
        }

    }

    render() {
        return (


            <View style={styles.container}>
                <Grad_Wavy customStyles={styles.svgCurve} />


                <View style={styles.headerView}>
                    <Header navigation={this.props.navigation} icon={'chevron-left'} icon_color={color.white} />
                </View>

                <View style={styles.logoView}>
                    <Image source={require('../../../src/Assets/onboard/white_workinbuddy_logo_2021_transparent_1.png')} style={{ height: 140, width: 140 }} />
                </View>



                <View style={styles.footerView}>
                    <Grad_Wavy3 customStyles={styles.svgCurve} />
                    <View style={styles.socialView}>
                        <View style={styles.socialViewinside}>
                            <View>
                                <Image source={require('../../Assets/auth/google_PNG19635.png')} style={{ height: 38, width: 38 }} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Image source={require('../../Assets/auth/facebook.png')} style={{ height: 35, width: 35 }} />
                            </View>
                        </View>


                    </View>

                    <View style={styles.footerinfo}>
                        <View style={{ justifyContent: 'flex-end' }}>
                            <TouchableOpacity onPress={() => NavigationService.navigate(authStack.login)} style={styles.new_regView}>
                                <Text style={styles.new_regtxt} >{strings.Already_Member_Login}</Text>
                            </TouchableOpacity>
                        </View>

                        {
                            this.state.loading == true ? (
                                <View style={styles.signinbtn}>
                                    <ActivityIndicator size="small" color={color.full_white} />
                                </View>

                            ) : (
                                <TouchableOpacity onPress={this.handleregister} style={styles.signinbtn}>
                                    <Text style={styles.signintext}>{strings.signup}</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </View>






                {/* <View style={styles.bodyView}>
                   
                              <View style={styles.signinView}>
                                <Text style={styles.signintxt}>{strings.signup}</Text>
                            </View>


                            <View style={styles.buttonView}>


                                <View style={styles.email}>
                                    <View style={styles.emailView}>
                                        <Text style={styles.emailtxt}>{strings.fullname}</Text>
                                    </View>

                                    <TextInput
                                        style={styles.inputtext}
                                        value={this.state.fullname}
                                        placeholder={strings.fullname}
                                        onChangeText={value => this.setState({ fullname: value })}
                                        placeholderTextColor={color.grey}
                                        selectionColor={color.primary}


                                    />
                                </View>


                                <View style={styles.email}>
                                    <View style={styles.emailView}>
                                        <Text style={styles.emailtxt}>{strings.Mobile_Number}</Text>
                                    </View>

                                    <TextInput

                                        keyboardType="numeric"
                                        style={styles.inputtext}
                                        value={this.state.phone_numer}
                                        placeholder={strings.mobilenumber}

                                        onChangeText={value => this.setState({ phone_numer: value })}
                                        placeholderTextColor={color.grey}
                                        selectionColor={color.primary}


                                    />
                                </View>



                                <View style={styles.email}>
                                    <View style={styles.emailView}>
                                        <Text style={styles.emailtxt}>Email</Text>
                                    </View>

                                    <TextInput
                                        style={styles.inputtext}
                                        value={this.state.email}
                                        placeholder={strings.email}
                                        onChangeText={value => this.setState({ email: value })}
                                        placeholderTextColor={color.grey}
                                        selectionColor={color.grey}


                                    />
                                </View>

                                <View style={styles.email}>
                                    <View style={styles.emailView}>
                                        <Text style={styles.emailtxt}>Password</Text>
                                    </View>
                                    <TextInput
                                        style={styles.inputtext}
                                        value={this.state.password}
                                        placeholder={strings.password}
                                        onChangeText={value => this.setState({ password: value })}
                                        secureTextEntry
                                        placeholderTextColor={color.grey}
                                        selectionColor={color.grey}
                                    />
                                </View>




                                





                            </View>







                        
                </View> */}

               

            </View>


        );
    };
};

const styles = StyleSheet.create({
    logoView: {
        borderWidth: 1
    },
    keyboard: {
        flex: 1
    },
    inputtext: {
        width: '80%',

        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: color.primary,


    },
    signintext: {
        fontFamily: 'Nunito-Regular',
        fontSize: 20,
        color: color.white
    },
    signinbtn: {
        borderWidth: 1,
        borderColor: color.full_white,
        height: 60,
        width: 120,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    new_regView: {


    },
    new_regtxt: {
        fontFamily: 'Nunito-Regular',
        color: color.white,
        fontSize: 16
    },
    bodyViewScroll: {
        height: '93%',

    },
    footerinfo: {
        borderWidth: 1,
        width: '90%',
    },
    footerView: {
        

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
    Forgot_PasswordView: {

        alignSelf: 'center',
        marginTop: '5%',
        alignItems: 'flex-end',

        width: '90%',




    },
    Forgot_Passwordtxt: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        fontWeight: 'bold',
        paddingRight: '10%',
        color: color.primary
    },
    signintxt: {
        color: color.primary,
        fontFamily: 'Roboto-Regular',
        fontSize: 30,
        fontWeight: 'bold'
    },
    signinView: {

        marginTop: '7%',
        width: '90%',
        alignSelf: 'center'
    },
    emailtxt: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        color: color.primary
    },
    emailView: {

        height: 20,
        width: '90%',

    },
    container: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: color.white,
    },
    svgCurve: {
        position: 'absolute',
        width: '100%'
    },
    headerView: {
        borderWidth: 1,
        marginTop: 44,
        height: '7%',
    },
    bodyView: {




    },
    buttonView: {

        width: '90%',
        alignSelf: 'center'
    },
    email: {
        marginTop: 10
    },


})

const mapStateToProps = state => {

    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (register) => { dispatch(signin(register)) },
    }
}

export default connect(mapStateToProps, { signup })(RegisterScreen);