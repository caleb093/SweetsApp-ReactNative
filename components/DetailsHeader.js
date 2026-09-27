import { View, Text, Pressable } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DetailsHeader({navigation}) {
    // console.log(navigation)

    // return (
    //     <Pressable onPress={() => navigation.goBack()}>
    //         <View style={{paddingTop: 30, paddingLeft: 15}}>
    //             <Svg width={200} height={200}>
    //                 <Image 
    //                     href={require('../assets/original1.svg')}
    //                     width={200}
    //                     height={200}
    //                 />
    //             </Svg>
    //         </View>
    //     </Pressable>
    // )

    return (
        <Pressable onPress={() => navigation.goBack()}>
            <View style={{paddingTop: 30, paddingLeft: 15}}>
                <Ionicons name="chevron-back" size={32} color={'#FCB495'} />
                {/* <Image source={require('../assets/keyboard_arrow_left.png')}/> */}
            </View>
        </Pressable>
    )
}