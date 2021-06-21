import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import Profile_Wavy from './profile_wavy';
import * as color from '../../utils/colors';
import * as strings from '../../utils/strings';
import { getuserSelector } from '../../modules/auth/selectors'
import { logout } from '../../modules/auth/actions'
import { launchImageLibrary } from 'react-native-image-picker';


const ProfileScreen = (props) => {
    console.log('user in profile is:', props)

    return (
        <ScrollView>
            <View style={styles.container}>
                <Profile_Wavy customStyles={styles.svgCurve} />


                <View style={styles.userdataContainer}>
                    <View style={styles.yourprofiletxtContainer}>
                        <Text style={styles.yourprofiletxt}>{strings.yourprofile}</Text>
                    </View>

                    {props.user != undefined ? (
                        <>
                            <View style={styles.userImageContainer}>
                                <Image
                                    source={require('../../Assets/homescreenicons/Ellipse.png')}
                                    style={{ height: 80, width: 80 }}
                                />
                            </View>
                            <View style={styles.userNameContainer}>
                                <Text style={styles.userNametxt}>{props.user.name}</Text>
                            </View>
                            <View style={styles.planContainer}>
                                <Text style={styles.plantxt}>Standard plan</Text>
                            </View>
                        </>
                            )
                            :
                            (
                            <View style={styles.nonregisterUserContainer}>
                                <View style={styles.SigninContainer}>
                                    <Text style={styles.signintxt}>Sign In</Text>
                                </View>
                            </View>
                            )
                    

                    }
                </View>

                <View style={styles.GotoContainer}>
                   
                   <TouchableOpacity>
                    <View style={styles.linkContainer}>

                        <View style={styles.icontextContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../../Assets/profileScreenIcons/account_settings.png')} style={styles.iconStyle} />
                            </View>
                            <View style={styles.linknameContainer}>
                                <Text style={styles.linknametxt}>{strings.Account_settings}</Text>
                            </View>
                        </View>

                        <View style={styles.arrowContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/rightarrow.png')}
                                style={styles.arrowstyle}
                            />
                        </View>
                    </View>
                    </TouchableOpacity>


                   
                   <TouchableOpacity>
                    <View style={styles.linkContainer}>

                        <View style={styles.icontextContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../../Assets/profileScreenIcons/Booking_icon.png')} style={styles.iconStyle} />
                            </View>
                            <View style={styles.linknameContainer}>
                                <Text style={styles.linknametxt}>{strings.My_bookings}</Text>
                            </View>
                        </View>

                        <View style={styles.arrowContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/rightarrow.png')}
                                style={styles.arrowstyle}
                            />
                        </View>
                    </View>
                    </TouchableOpacity>
                

 <TouchableOpacity>
                    <View style={styles.linkContainer}>

                        <View style={styles.icontextContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../../Assets/profileScreenIcons/notification_icon.png')} style={styles.iconStyle} />
                            </View>
                            <View style={styles.linknameContainer}>
                                <Text style={styles.linknametxt}>{strings.Notifications}</Text>
                            </View>
                        </View>

                        <View style={styles.arrowContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/rightarrow.png')}
                                style={styles.arrowstyle}
                            />
                        </View>
                        </View>
                    </TouchableOpacity>

 <TouchableOpacity>
                    <View style={styles.linkContainer}>

                        <View style={styles.icontextContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../../Assets/profileScreenIcons/packages_buy.png')} style={styles.iconStyle} />
                            </View>
                            <View style={styles.linknameContainer}>
                                <Text style={styles.linknametxt}>{strings.Buy_a_package}</Text>
                            </View>
                        </View>

                        <View style={styles.arrowContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/rightarrow.png')}
                                style={styles.arrowstyle}
                            />
                        </View>
                        </View>
                    </TouchableOpacity>


<TouchableOpacity>
                    <View style={styles.linkContainer}>

                        <View style={styles.icontextContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../../Assets/profileScreenIcons/history.png')} style={styles.iconStyle} />
                            </View>
                            <View style={styles.linknameContainer}>
                                <Text style={styles.linknametxt}>{strings.History}</Text>
                            </View>
                        </View>

                        <View style={styles.arrowContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/rightarrow.png')}
                                style={styles.arrowstyle}
                            />
                        </View>
                        </View>
                    </TouchableOpacity>

<TouchableOpacity>
                    <View style={styles.linkContainer}>

                        <View style={styles.icontextContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../../Assets/profileScreenIcons/discounts.png')} style={styles.iconStyle} />
                            </View>
                            <View style={styles.linknameContainer}>
                                <Text style={styles.linknametxt}>{strings.Discounts}</Text>
                            </View>
                        </View>

                        <View style={styles.arrowContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/rightarrow.png')}
                                style={styles.arrowstyle}
                            />
                        </View>
                        </View>
                    </TouchableOpacity>

<TouchableOpacity>
                    <View style={styles.linkContainer}>

                        <View style={styles.icontextContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../../Assets/profileScreenIcons/team_management.png')} style={styles.iconStyle} />
                            </View>
                            <View style={styles.linknameContainer}>
                                <Text style={styles.linknametxt}>{strings.Team_managements}</Text>
                            </View>
                        </View>

                        <View style={styles.arrowContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/rightarrow.png')}
                                style={styles.arrowstyle}
                            />
                        </View>
                        </View>
                    </TouchableOpacity>


                </View>




                <View
                    style={{
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 25
                    }}
                />

                <View style={styles.supportContainer}>
                    <View style={styles.SupporttxtContainer}>
                        <Text style={styles.Supporttxt}>Support</Text>
                    </View>


                    <TouchableOpacity style={styles.supportlink}>

                        <View style={styles.supporticonContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/contact.png')}
                                style={styles.supporticonstyle}
                            />
                        </View>
                        <View style={styles.supportlinktxtContainer}>
                            <Text style={styles.suppolinktxt}>{strings.Contact_us}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.supportlink}>

                        <View style={styles.supporticonContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/termandcondition.png')}
                                style={styles.supporticonstyle}
                            />
                        </View>
                        <View style={styles.supportlinktxtContainer}>
                            <Text style={styles.suppolinktxt}>{strings.Terms_and_conditions}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.supportlink}>

                        <View style={styles.supporticonContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/complaint.png')}
                                style={styles.supporticonstyle}
                            />
                        </View>
                        <View style={styles.supportlinktxtContainer}>
                            <Text style={styles.suppolinktxt}>{strings.Privacy_policy}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.supportlink}>

                        <View style={styles.supporticonContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/feedback.png')}
                                style={styles.supporticonstyle}
                            />
                        </View>
                        <View style={styles.supportlinktxtContainer}>
                            <Text style={styles.suppolinktxt}>{strings.Give_feedback_for_us}</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => props.logout()} style={styles.supportlink}>

                        <View style={styles.supporticonContainer}>
                            <Image source={require('../../Assets/profileScreenIcons/logout.png')}
                                style={styles.supporticonstyle}
                            />
                        </View>
                        <View style={styles.supportlinktxtContainer}>
                            <Text style={styles.suppolinktxt}>{strings.Logout}</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{
                    marginTop: 100
                }} />
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    SigninContainer: {

        alignItems: 'center',
        height: 100
    },
    signintxt: {
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Roboto-Regular',
        fontSize: 25,
    },
    nonregisterUserContainer: {

        width: '90%',
        alignSelf: 'center',
        marginTop: '20%'
    },
    supporticonstyle: {
        height: 20,
        width: 20
    },
    supportlinktxtContainer: {
        marginLeft: 11
    },
    suppolinktxt: {
        fontWeight: '400',

        fontFamily: 'Roboto-Regular',
        fontSize: 14,
    },
    supportlink: {
        marginTop: 20,
        flexDirection: 'row'
    },
    Supporttxt: {
        fontWeight: 'bold',

        fontFamily: 'Roboto-Regular',
        fontSize: 18,
    },

    supportContainer: {
        marginTop: 25,
        width: '90%',
        alignSelf: 'center'
    },
    arrowstyle: {
        height: 20,
        width: 45
    },
    linknametxt: {

        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
    },
    iconContainer: {

     
    },
    icontextContainer: {
       
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linknameContainer: {

        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowContainer: {
        marginRight: '5%',

        width: 45,
        justifyContent: 'center'
    },
    iconStyle: {
        height: 40,
        width: 40
    },

    linkContainer: {
        elevation:2,
       padding:7,
    //    borderRadius:5,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        alignContent:'center',
       




    },
    GotoContainer: {

        width: '90%',
        alignSelf: 'center'
    },
    plantxt: {
        color: color.primary,
        fontWeight: '400',
        textAlign: "center",
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
    },
    planContainer: {

        alignItems: 'center',
        marginTop: 10
    },
    userNametxt: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
    },
    userNameContainer: {

        marginTop: 10
    },
    userImageContainer: {

        alignItems: 'center',
        marginTop: 20
    },
    yourprofiletxt: {
        color: color.full_white,
        fontWeight: '500',
        textAlign: "center",
        fontFamily: 'Roboto-Regular',
        fontSize: 30,
    },
    yourprofiletxtContainer: {

    },
    userdataContainer: {

        marginTop: 100
    },
    container: {
        backgroundColor: color.white,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
})

const mapStateToProps = (state) => {
    return {
        user: getuserSelector(state)
    }
}
export default connect(mapStateToProps, { logout })(ProfileScreen)