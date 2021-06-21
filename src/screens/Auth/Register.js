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
import Icon from 'react-native-vector-icons/AntDesign';


class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            fullnameError: '',
            phone_numer: '',
            phoneError: '',
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
         

        if (!fullname == '') {
            console.log('came')

             if (!phone_numer == '') {
                if (!email == '') {
                    if (!password == '') {
                        this.validate(email);
                        this.validatepass(password)

                        if (this.state.Password || this.state.Email) {
                            this.setState({ loading: true })
                            const Email = this.state.Email;
                            const Password = this.state.Password;
                            console.log('everyhing is good')
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
                        //    console.log(this.state.Email)



                    } else {
                        console.log('blah')
                        this.setState({ passwordError: '* Enter password' })

                    }


                } else {
                   this.setState({ emailError: '* Enter email' })
                }
            } else {
                
                this.setState({ phoneError: '* enter a phone' })
                
            }


        } else {
            this.setState({ fullnameError: '* enter name' })
            console.log('enter full name')
        }
           
        
    }

    validatepass = (value) => {
        const { passwordError, emptyPassword } = this.state;
        if (value.length < 5) {
            this.setState({ passwordError: '* should be more than 5 charecters' })
        }
        else {
            this.setState({ Password: value });
            this.setState({ passwordError: '' })
        }


    }

    validate = (text) => {
        // console.log(text);
        const { emailError } = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(text) === false) {
            this.setState({ emailError: '* invalid Email' })
            console.log('invalidd email')
            return false;
        }
        else {
            this.setState({ Email: text })
            this.setState({ emailError: '' })
            this.setState({ emptyEmail: '' })

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



                {/* inputs */}



                <View style={styles.bodyView}>


                    <KeyboardAvoidingView>
                        <ScrollView>

                            <View style={styles.signinView}>
                                <Text style={styles.signintxt}>{strings.signup}</Text>
                            </View>


                            <View style={styles.buttonView}>


                                <View style={styles.email}>
                                    <View style={styles.emailView}>
                                        <Text style={styles.emailtxt}>{strings.fullname}</Text>
                                        {
                                            !this.state.fullnameError == '' ? (
                                                <Text style={{ marginLeft: 10, color: 'red' }}>{this.state.fullnameError}</Text>
                                            ) : null
                                        }
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
                                        {
                                            !this.state.phoneError == '' ? (
                                                <Text style={{ marginLeft: 10, color: 'red' }}>{this.state.phoneError}</Text>
                                            ) : null
                                        }
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
                                        {
                                            !this.state.emailError == '' ? (
                                                <Text style={{ marginLeft: 10, color: 'red' }}>{this.state.emailError}</Text>
                                            ) : null
                                        }
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
                                        {
                                            !this.state.passwordError == '' ? (
                                                <Text style={{ marginLeft: 10, color: 'red' }}>{this.state.passwordError}</Text>
                                            ) : null
                                        }
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




                                <View style={styles.footerView}>
                                    <Grad_Wavy3 customStyles={styles.svgCurve} />
                                    <View style={styles.socialView}>
                                        <View style={styles.socialViewinside}>
                                            <TouchableOpacity onPress={this.handlegoogle} style={styles.socialmediaIconcontainer}>
                                                <Image source={require('../../Assets/auth/google_PNG19635.png')} style={{ height: 40, width: 40 }} />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.socialmediaIconcontainer}>
                                                <Icon name={'facebook-square'} size={40} color={color.navyblue} />
                                            </TouchableOpacity>
                                        </View>


                                    </View>


                                    <View style={styles.footerinfo}>
                                        <View style={{ justifyContent: 'center' }}>
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






                            </View>




                        </ScrollView>
                    </KeyboardAvoidingView>


                </View>







            </View>


        );
    };
};

const styles = StyleSheet.create({
    socialmediaIconcontainer: {
        height: 40,
        width: 40,
        borderWidth: 0.1,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    keyword: {
        flex: 1,
    },
    logoView: {

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
        height: 50,
        width: 100,
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


    },
    footerinfo: {
        width: '90%',
        marginTop: '20%',
        marginBottom: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footerView: {

        height: 200,
        alignItems: 'center',


    },
    socialView: {

        marginTop: '10%',
        width: '100%',

    },
    socialViewinside: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '35%'
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
        flexDirection: 'row',
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

    },
    headerView: {

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