import { View, Text, Image, Pressable } from "react-native"
import Ionicons from '@expo/vector-icons/EvilIcons';

export default function HomeHeader({navigation}) {
    // console.log(navigation)

     return (
        <Pressable >
            <View style={{paddingTop: 40, paddingLeft: 10, paddingRight: 10, backgroundColor: '#FCB495', flexDirection: 'row', justifyContent: 'space-between'}}>
                {/* <Image source={require('../assets/keyboard_arrow_left.png')}/> */}
                <Ionicons onPress={() => navigation.openDrawer()} name="navicon" size={32} color="white" />
                <Ionicons name="cart" size={32} color="white" />
             </View>
        </Pressable>
    )
}