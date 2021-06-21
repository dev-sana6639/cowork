import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getuserSelector } from '../../modules/auth/selectors'
import { logout } from '../../modules/auth/actions';
import * as strings from '../../utils/strings';
import * as color from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import { gettopratedspaces, recentviewspaces, getbrowsebylocality, Blogstosupportyou } from '../../modules/common/service'

const HomeScreen = (props) => {
    const [topratedspaces, setTopratedspaces] = useState('');
    const [recentviewedspaces, setRecentViewspaces] = useState('');
    const [browsebylocality, setBrowsebylocality] = useState('');
    const [blogs, setblogs] = useState('');

    useEffect(async () => {
        const toprated = await gettopratedspaces();

        setTopratedspaces(toprated)
        const recentViewedspaces = await recentviewspaces()
        setRecentViewspaces(recentViewedspaces)

        const Browsebylocality = await getbrowsebylocality();
        setBrowsebylocality(Browsebylocality)

        const Blogs = await Blogstosupportyou();
        setblogs(Blogs)

    });

    const onPressLearnMore = () => {
        props.logout();


    }



    // console.log('top rated are', topratedspaces)

    const ItemSeprator = () => <View style={{ width: 10 }} />
    const blogItemSeprator = () => <View style={{ width: '100%', height: 5 }} />

    const renderTopRatedSpaces = (item) => {

        const {
            spacename,
            price,
            location,
            rating,
        } = item.item;
        return (
            <View style={styles.topratedspacemainContainer}>

                <View style={styles.ImageContainer}>
                    <Image source={require('../../Assets/homescreenicons/topratedummydata/6c87b3c8da23896328110552404391f5.png')} style={{ width: 290, borderRadius: 10 }} />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.inforow1}>
                        <View style={styles.spacenameContainer}>
                            <Text style={styles.spacenametxt}>{item.item.spacename}</Text>
                        </View>

                        <View style={styles.priceContainer}>
                            <Image source={require('../../Assets/homescreenicons/topratedummydata/rupee.png')} style={{ height: 14, width: 20 }} />
                            <Text style={styles.pricetxt}>{price} Onwards</Text>
                        </View>
                    </View>

                    <View style={styles.inforow2}>
                        <View>
                            <Text style={styles.spacelocationtxt}>{location}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', paddingRight: 12 }}>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.ratingtxt}>{rating}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 5 }}>
                                <Image source={require('../../Assets/homescreenicons/topratedummydata/Star.png')} />
                                <Image source={require('../../Assets/homescreenicons/topratedummydata/Star.png')} />
                                <Image source={require('../../Assets/homescreenicons/topratedummydata/Star.png')} />
                                <Image source={require('../../Assets/homescreenicons/topratedummydata/Star.png')} />

                            </View>
                        </View>
                    </View>



                </View>
            </View>

        )
    }

    const renderrecentviewedSpaces = (item) => {

        // console.log('recent view', item)
        const {
            location,
            price,
            rating,
            spacename,
        } = item.item;


        return (
            <View style={styles.recentViewedspacemainContainer}>

                <View style={styles.ImageContainer}>
                    <Image source={require('../../Assets/homescreenicons/topratedummydata/collab.png')} style={{ width: 290, borderRadius: 10 }} />
                </View>

                <View style={styles.recentviwedinfoContainer}>
                    <View style={styles.inforow1}>
                        <View style={styles.spacenameContainer}>
                            <Text style={styles.spacenametxt}>{spacename}</Text>
                        </View>

                        <View style={styles.priceContainer}>
                            <Image source={require('../../Assets/homescreenicons/topratedummydata/rupee.png')} style={{ height: 14, width: 20 }} />
                            <Text style={styles.pricetxt}>{price} Onwards</Text>
                        </View>
                    </View>

                    <View style={styles.inforow2}>
                        <View>
                            <Text style={styles.spacelocationtxt}>{location}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', paddingRight: 12 }}>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.ratingtxt}>{rating}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginLeft: 5 }}>
                                <Image source={require('../../Assets/homescreenicons/topratedummydata/Star.png')} />
                                <Image source={require('../../Assets/homescreenicons/topratedummydata/Star.png')} />
                                <Image source={require('../../Assets/homescreenicons/topratedummydata/Star.png')} />
                                <Image source={require('../../Assets/homescreenicons/topratedummydata/Star.png')} />

                            </View>
                        </View>
                    </View>



                </View>
            </View>
        )
    }

    const browsByLocality = (item) => {
        const {
            area
        } = item.item;

        return (
            <View style={styles.browsebylocalitycontainer}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} source={require('../../Assets/homescreenicons/topratedummydata/browsebylocality.png')} style={styles.image}>

                    <Text style={styles.browsebylocalitytext}>{area}</Text>

                </ImageBackground>
            </View>

        )
    }

    const renderblogs = ({ item }) => {
        console.log('blogs are', item)

        return (
            <View style={styles.blogstosupportyouContainer}>
                <View style={{ width: '40%' }}>
                    <Image source={require('../../Assets/homescreenicons/topratedummydata/blogs.png')}
                        style={{ width: 120, height: 70 }}
                    />
                </View>
                <View style={styles.bloginfoContainer}>
                    <View>
                        <Text style={styles.blogheadlinetxt}>{item.headline}</Text>
                    </View>
                    <View style={styles.blogdateContainer}>
                        <View>
                            <Image source={require('../../Assets/homescreenicons/clockicon.png')} />
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={styles.datetxt}>{item.time}</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }






    return (
        <View style={styles.container}>
            {/* location and user info */}
            <View style={styles.locationuserdetcontainer}>
                <TouchableOpacity style={styles.locationcontainer}>
                    <View>
                        <Image source={require('../../Assets/homescreenicons/placeholder.png')} style={{ height: 20, width: 20 }} />
                    </View>
                    <View style={styles.locationtxtcontainer}>
                        <Text style={styles.locationtxt}>{strings.dummylocation}</Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 10,
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />


                <View style={styles.welcomcontainer}>
                    <View style={styles.welcomDiv}>
                        {props.user == undefined ? (
                            <Text style={styles.welcomtxt}>Welcom </Text>

                        )
                            : (
                                <Text style={styles.welcomtxt}>Welcom  {props.user.name}</Text>

                            )
                        }
                    </View>

                    <View style={styles.imagediv}>
                        <Image source={require('../../Assets/homescreenicons/Ellipse.png')} />
                    </View>

                </View>

            </View>

            <ScrollView>
                {/* banner */}
                <View style={styles.bannercontainer}>
                    <View style={{ marginTop: 15 }} />
                    <View style={{ backgroundColor: color.white }}>
                        <Image source={require('../../Assets/homescreenicons/co_working_banner_image.png')} />
                    </View>
                </View>

                {/*  choose category */}
                <View style={styles.categoryContainer}>
                    <View style={styles.categorytxtContainer}>
                        <Text style={styles.choosecategorytxt}>{strings.choosecategory}</Text>
                    </View>

                    <View style={styles.CategotyMainContainer}>

                        <View style={styles.row}>

                            <TouchableOpacity>
                                <LinearGradient style={styles.categoryoptions} colors={['#1CB5E0', '#000046']} >

                                    <Image source={require('../../Assets/homescreenicons/bulk_book_1_3.png')} style={{ height: 150, width: 150 }} />

                                </LinearGradient>
                                <View style={styles.catogorytxtContainer}>
                                    <Text style={styles.categorytxt}>{strings.Explore_Nearby_Spaces}</Text>
                                </View>
                            </TouchableOpacity>




                            <TouchableOpacity>
                                <LinearGradient style={styles.categoryoptions} colors={['#C33764', '#1D2671']} >
                                    <Image source={require('../../Assets/homescreenicons/bulk_book_1_5.png')} style={{ height: 150, width: 150 }} />
                                </LinearGradient>
                                <View style={styles.catogorytxtContainer}>
                                    <Text style={styles.categorytxt}>{strings.Buy_a_Membership}</Text>
                                </View>
                            </TouchableOpacity>

                        </View>


                        <View style={styles.row}>
                            <TouchableOpacity>
                                <LinearGradient style={styles.categoryoptions} colors={['#BDFFF3', '#4AC29A']} >
                                    <Image source={require('../../Assets/homescreenicons/meetingroom-01.png')} style={{ height: 150, width: 150 }} />
                                </LinearGradient>
                                <View style={styles.catogorytxtContainer}>
                                    <Text style={styles.categorytxt}>{strings.Book_a_Meeting_Room}</Text>
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity>

                                <LinearGradient style={styles.categoryoptions} colors={['#4568DC', '#B06AB3']} >
                                    <Image source={require('../../Assets/homescreenicons/bulk_book_1_2.png')} style={{ height: 150, width: 150 }} />
                                </LinearGradient>
                                <View style={styles.catogorytxtContainer}>
                                    <Text style={styles.categorytxt}>{strings.Buy_a_Membership}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.row}>
                            <TouchableOpacity>
                                <LinearGradient style={styles.categoryoptions} colors={['#34E89E', '#0F3443']} >
                                    <Image source={require('../../Assets/homescreenicons/bulk_book_1_1.png')} style={{ height: 150, width: 150 }} />
                                </LinearGradient>
                                <View style={styles.catogorytxtContainer}>
                                    <Text style={styles.categorytxt}>{strings.Bulk_Booking}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <LinearGradient style={styles.categoryoptions} colors={['#E29587', '#85121B']} >
                                    <Image source={require('../../Assets/homescreenicons/bulk_book_1_6.png')} style={{ height: 150, width: 150 }} />
                                </LinearGradient>
                                <View style={styles.catogorytxtContainer}>
                                    <Text style={styles.categorytxt}>{strings.Refer_a_Friend}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.hyegeneContainer}>
                        <View style={styles.hygiene_ImageContainer}>
                            <Image source={require('../../Assets/homescreenicons/hyegen.png')} style={{ height: 90, width: 80 }} />
                        </View>
                        <View style={styles.hyegeninfoContainer}>
                            <View style={styles.infoandiconContainer}>
                                <View style={styles.Hygiene_assured_infoContainer}>
                                    <View style={styles.Hygiene_assuredtxtContainer}>
                                        <Text style={styles.Hygiene_assuredtxt}>{strings.Hygiene_assured}</Text>
                                    </View>
                                    <View style={styles.Your_safety_our_responsibilityContainer}>
                                        <Text style={styles.Your_safety_our_responsibilitytxt}>{strings.Your_safety_our_responsibility}</Text>
                                    </View>
                                </View>
                                <View style={styles.arrowContainer}>
                                    <Image source={require('../../Assets/homescreenicons/Left_Arrow.png')} style={{ height: 35, width: 24 }} />
                                </View>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    alignSelf: 'center',
                                    marginTop: 10,
                                    borderBottomColor: color.lineopacity,
                                    borderBottomWidth: 1,
                                }}
                            />


                            <View style={styles.hygiene_contentContainer}>
                                <Text style={styles.hygiene_contenttxt}>{strings.hygiene_content}</Text>
                            </View>
                        </View>

                    </View>

                </View>

                {/* top rated spaces nearby */}
                <View style={styles.topratedspacesnearbyContainer}>

                    <View style={styles.Top_Rated_Spaces_NearbyRowContainer}>
                        <View style={styles.Top_Rated_Spaces_NearbytxtContainer}>
                            <Text style={styles.Top_Rated_Spaces_Nearbytxt}>{strings.Top_Rated_Spaces_Nearby}</Text>
                        </View>
                        <View style={styles.viewallContaner}>
                            <TouchableOpacity>
                                <Text style={styles.viewalltxt}>View all</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.toprateflatlistContainer}>
                        <FlatList
                            data={topratedspaces}
                            renderItem={renderTopRatedSpaces}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            ItemSeparatorComponent={ItemSeprator}
                        />
                    </View>




                </View>


                {/* recent View Spaces */}

                <View style={styles.topratedspacesnearbyContainer}>

                    <View style={styles.Top_Rated_Spaces_NearbyRowContainer}>
                        <View style={styles.Top_Rated_Spaces_NearbytxtContainer}>
                            <Text style={styles.Top_Rated_Spaces_Nearbytxt}>{strings.Recently_Viewed_Spaces}</Text>
                        </View>
                        <View style={styles.viewallContaner}>
                            <TouchableOpacity>
                                <Text style={styles.viewalltxt}>View all</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.toprateflatlistContainer}>
                        <FlatList
                            data={recentviewedspaces}
                            renderItem={renderrecentviewedSpaces}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            ItemSeparatorComponent={ItemSeprator}
                        />
                    </View>




                </View>

                {/* browse By Locality */}
                <View style={styles.topratedspacesnearbyContainer}>

                    <View style={styles.Top_Rated_Spaces_NearbyRowContainer}>
                        <View style={styles.Top_Rated_Spaces_NearbytxtContainer}>
                            <Text style={styles.Top_Rated_Spaces_Nearbytxt}>{strings.Browse_by_Locality}</Text>
                        </View>
                        <View style={styles.viewallContaner}>
                            <TouchableOpacity>
                                <Text style={styles.viewalltxt}>View all</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.toprateflatlistContainer}>
                        <FlatList
                            data={browsebylocality}
                            renderItem={browsByLocality}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            ItemSeparatorComponent={ItemSeprator}
                        />
                    </View>




                </View>

                <View style={styles.blogsflatlist}>

                    <View style={styles.ourblogsContainer}>
                        <View style={styles.Top_Rated_Spaces_NearbytxtContainer}>
                            <Text style={styles.Top_Rated_Spaces_Nearbytxt}>{strings.Our_Blogs_to_Support_You}</Text>
                        </View>
                        <View style={styles.viewallContaner}>
                            <TouchableOpacity>
                                <Text style={styles.viewalltxt}>View all</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <FlatList
                        data={blogs}
                        renderItem={renderblogs}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        ItemSeparatorComponent={blogItemSeprator}
                    />

                </View>

                <View style={{
                    height:100,
                }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    datetxt: {
        color: 'black',

        fontFamily: 'Roboto-Regular',
    },
    blogheadlinetxt: {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
    },
    blogdateContainer: {
        flexDirection: 'row'
    },
    bloginfoContainer: {

        width: '55%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 2,
        marginLeft: 5

    },
    ourblogsContainer: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    blogsflatlist: {
        marginTop: 30,
        alignSelf: 'center',
        width: '90%'
    },
    blogstosupportyouContainer: {
        padding:7,
        flexDirection: 'row',
        width: '100%',
        elevation:2

    },
    browsebylocalitytext: {

        color: color.full_white,
        fontSize: 42,
        textAlign: "center",
        fontFamily: 'Roboto-Regular',
        fontSize: 24,


    },
    browsebylocalitycontainer: {
        height: 200,
        width: 260,
        borderRadius: 20
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 15
    },
    recentViewedspacemainContainer: {
        borderRadius: 10,
        backgroundColor: color.blue
    },
    recentviwedinfoContainer: {
        backgroundColor: color.blue,
        borderRadius: 10,
    },
    spacelocationtxt: {
        color: color.white,
        paddingLeft: 10
    },

    locationtxt: {
        fontFamily: 'Roboto-Regular',

        fontSize: 14,
        lineHeight: 18,
    },
    ratingContainer: {

        justifyContent: 'flex-end'
    },
    ratingtxt: {

        fontFamily: 'Roboto-Regular',
        color: color.white,
        fontSize: 16,
        lineHeight: 18,
    },
    priceContainer: {

        flexDirection: 'row',

        paddingRight: 10

    },
    pricetxt: {

        fontFamily: 'Roboto-Regular',
        color: color.white,
        fontSize: 12,
        lineHeight: 14,
    },
    ImageContainer: {
        borderRadius: 20,
        backgroundColor: color.primary

    },
    spacenametxt: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold',
        fontSize: 13,
        lineHeight: 16,
        color: color.white

    },
    spacenameContainer: {

        paddingLeft: 10
    },
    inforow1: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,

    },
    inforow2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
    },
    infoContainer: {
        backgroundColor: color.primary,
        borderRadius: 10,


    },
    toprateflatlistContainer: {
        borderRadius: 10,
        marginLeft: 20
    },
    viewalltxt: {
        fontFamily: 'Roboto-Regular',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        color: color.primary
    },
    topratedspacemainContainer: {
        borderRadius: 10,

        backgroundColor: color.primary

    },
    viewallContaner: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    Top_Rated_Spaces_NearbytxtContainer: {

        padding: 5

    },

    Top_Rated_Spaces_Nearbytxt: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 21
    },
    Top_Rated_Spaces_NearbyRowContainer: {
        paddingTop: 5,
        width: '90%',
        alignSelf: 'center',

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    topratedspacesnearbyContainer: {

        marginTop: 30
    },
    arrowContainer: {
        paddingRight: 2,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    Your_safety_our_responsibilitytxt: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16
    },
    Your_safety_our_responsibilityContainer: {

        marginTop: 10,
    },
    Hygiene_assuredtxt: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16
    },
    Hygiene_assuredtxtContainer: {

        marginTop: 10
    },
    Hygiene_assured_infoContainer: {

    },
    hygiene_ImageContainer: {

        width: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hygiene_contenttxt: {
        fontFamily: 'Roboto-Regular',

        fontSize: 11,
        lineHeight: 25,
        color: color.hiegen_content_color

    },
    hygiene_contentContainer: {

    },
    infoandiconContainer: {
        flexDirection: 'row',

        justifyContent: 'space-between'
    },
    hyegeninfoContainer: {

        width: '70%'
    },
    hyegeneContainer: {
        marginTop: 30,
        elevation: 5,
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: color.full_white
    },

    catogorytxtContainer: {
        marginTop: 10,

        alignItems: 'center'
    },
    categorytxt: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold',
        fontSize: 13,
    },

    categoryoptions: {
        borderRadius: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignSelf: 'center',
        width: '90%',
    },
    CategotyMainContainer: {

    },
    choosecategorytxt: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold',
        fontSize: 18,
    },
    categorytxtContainer: {

        width: '90%',
        alignSelf: 'center',
        marginTop: 20
    },
    categoryContainer: {


    },
    imagediv: {
        // aspectRatio: 16 / 9,
    },
    welcomDiv: {

        justifyContent: 'center'
    },
    welcomtxt: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold',
        fontSize: 20,
    },
    welcomcontainer: {

        width: '90%',
        alignSelf: 'center',
        top: 31,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    HRline: {
        height: 2,
        width: '100%',
    },
    locationtxtcontainer: {

        marginLeft: 5
    },

    locationtxt: {
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        color: color.primary
    },
    locationcontainer: {
        width: '92%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '14%',


    },
    container: {
        backgroundColor:color.white,
        height: '100%',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    locationuserdetcontainer: {

        height: 180,
        width: '100%',

    },
    bannercontainer: {
        backgroundColor: color.banner,
        height: 160,
        width: '100%',
    },

})


const mapStateToProps = state => {
    return {
        user: getuserSelector(state),

    }

}
export default connect(mapStateToProps, { logout })(HomeScreen);