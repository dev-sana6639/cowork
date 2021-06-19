import {PixelRatio, Dimensions} from 'react-native';
import { create } from 'react-native-pixel-perfect'

const designResolution = {
    width: 360,
    height: 710.666
} //this size is the size that your design is made for (screen size)
const perfectSize = create(designResolution)



const pxtodp = size => {
 const result = perfectSize(size)
 return result;
}

export default pxtodp;
