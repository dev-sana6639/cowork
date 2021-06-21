import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import * as appcolors from '../../utils/colors';


export default function Profile_Wavy({ customStyles }) {

    return (
        <View style={customStyles}>
            


                    <Svg width="100%" height="250" viewBox="0 0 410 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M0 0H414V284.5L213.5 189L0 284.5V0Z" fill="#FF6000" />
                    </Svg>


                </View>
            

        
    )
}