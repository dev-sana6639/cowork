import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import * as color from '../../utils/colors'
import * as strings from '../../utils/strings';
import Grad_Wavy from '../../components/wavy_gradient/wavy_gradient';
import Grad_Wavy3 from '../../components/wavy_gradient/wavy_gradient3'
import Header from '../../components/Header/Header';
import AntDesign from 'react-native-vector-icons/AntDesign'
import NavigationService from '../../utils/navigation'
import { authStack } from '../../config/navigator';
import Input from '../../containers/input/Input';
import { LoginService,LoginwithFacebook } from '../../modules/auth/services'
import { signin } from '../../modules/auth/actions'
import { gettingstartcompleted } from '../../modules/common/actions'
import { connect } from 'react-redux';
// import {LoginwithFacebook} from '../../modules/common/service';
import { LoginButton, AccessToken ,LoginManager } from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/AntDesign';



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
            loading: false


        }
    }

    handlelogin = async () => {
        const {
            email,
            password
        } = this.state;

        

        if (!email == '') {
            if (!password == '') {
                this.validate(email);
                this.validatepass(password)

                if (this.state.Password || this.state.Email) {
                    this.setState({loading: true})
                    const Email = this.state.Email;
                    const Password = this.state.Password;
                    
        this.setState({ loading: true })
        console.log('login started')
        const login = await LoginService({ email, password })
        console.log('login done result is:')
        if (login.error) {
            this.setState({ invalidecred: login.error })
            this.setState({ loading: false })
            console.log('error while login')
        } else {
            this.setState({ loading: false })
            this.props.signin(login)
            // this.props.gettingstartcompleted()
            console.log('login success')

        }


                }
                //    console.log(this.state.Email)



            } else {
                console.log('blah')
                this.setState({ passwordError: '* Enter password' })

            }

        } else {
            this.setState({ emailError: '* Enter email' })
            console.log('empty email')
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

    handlegoogle = () => {
        console.log('came to google s')
    }

    // handlefacebook = () =>{
    //     console.log('came to facebook')
    //     const response = LoginwithFacebook();
    // }

    handlefacebooklogin = async () =>{
        const facebookuser = await LoginwithFacebook();
    }


    render() {




        return (

            <View style={styles.container}>
                <Grad_Wavy customStyles={styles.svgCurve} />


                <View style={styles.headerView}>
                    <Header navigation={this.props.navigation} icon={'chevron-left'} icon_color={color.white} />
                </View>

                <View>
                    <Image source={require('../../../src/Assets/onboard/white_workinbuddy_logo_2021_transparent_1.png')} style={{ height: 130, width: 130 }} />
                </View>


                <View style={styles.bodyView}>
                    <ScrollView>
                        <KeyboardAvoidingView>




                            <View style={styles.signinView}>

                                <Text style={styles.signintxt}>{strings.signin}</Text>
                            </View>


                            <View style={styles.buttonView}>

                                <View style={styles.email}>
                                    <View style={styles.emailView}>
                                        <Text style={styles.emailtxt}>Email</Text>
                                        {
                                            this.state.emailError != '' ? (
                                                <Text style={{marginLeft:10,color:'red'}}>{this.state.emailError}</Text>
                                            ):null
                                        }

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
                                        {
                                            this.state.passwordError != '' ? (
                                                <Text style={{marginLeft:10,color:'red'}}>{this.state.passwordError}</Text>
                                            ):null
                                        }
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



                                <View style={styles.footerView}>
                                    <Grad_Wavy3 customStyles={styles.svgCurve} />

                                    <View style={styles.socialView}>
                                        <View style={styles.socialViewinside}>
                                            <TouchableOpacity onPress={this.handlegoogle} style={styles.socialmediaIconcontainer}>
                                                <Image source={require('../../Assets/auth/google_PNG19635.png')} style={{ height: 40, width: 40 }} />
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={this.handlefacebooklogin} style={styles.socialmediaIconcontainer}>
                                                 <Icon name={'facebook-square'} size={40} color={color.navyblue} />
                                            </TouchableOpacity>
                                          
                                                
                                                    {/* <LoginButton
                                                        onLoginFinished={
                                                            (error, result) => {
                                                                if (error) {
                                                                    console.log("login has error: " + result.error);
                                                                } else if (result.isCancelled) {
                                                                    console.log("login is cancelled.");
                                                                } else {
                                                                    AccessToken.getCurrentAccessToken().then(
                                                                        (data) => {
                                                                            console.log(data.accessToken.toString())
                                                                        }
                                                                    )
                                                                }
                                                            }
                                                        }

                                                        
                                                        onLogoutFinished={() => console.log("logout.")}
                                                        
                                                         
                                                        /> */}
                                              
                                          
                                        </View>


                                    </View>

                                    <View style={styles.footerinfo}>
                                        <View style={{ justifyContent: 'flex-end' }}>

                                            <TouchableOpacity onPress={() => NavigationService.navigate(authStack.Register)} style={styles.new_regView}>
                                                <Text style={styles.new_regtxt} >{strings.New_Here_Register}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {
                                            this.state.loading == true ? (
                                                <View style={styles.signinbtn}>
                                                    <ActivityIndicator size="small" color={color.full_white} />
                                                </View>

                                            ) : (
                                                <TouchableOpacity onPress={this.handlelogin} style={styles.signinbtn}>
                                                    <Text style={styles.signintext}>{strings.signin}</Text>
                                                </TouchableOpacity>
                                            )

                                        }
                                    </View>
                                </View>



                            </View>


                        </KeyboardAvoidingView>
                    </ScrollView>



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

        zIndex:1,
        width: '90%',
        paddingTop: 50,
        marginBottom: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footerView: {

        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    socialView: {
        width: '90%',
        alignSelf: 'center',
        zIndex:1,
    },
    socialViewinside: {
        
        flexDirection: 'row',
        justifyContent: 'space-around',

        marginTop: '5%',
        width: '30%'
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

        marginTop: '30%',
        width: '90%',
        alignSelf: 'center'
    },
    emailtxt: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        color: color.primary
    },
    emailView: {
        
        
         flexDirection:'row',
        height: 20,
        width: '90%',
        alignSelf: 'center'
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

        marginTop: 44,
        height: '7%',
    },
    bodyView: {
        height: '93%'



    },
    buttonView: {

    },
    email: {
        marginTop: 20
    },


})


const mapDispatchToProps = (dispatch) => {
    return {
        signin: (login) => { dispatch(signin(login)) },
    }
}

export default connect(null, { gettingstartcompleted, signin })(LoginScreen);