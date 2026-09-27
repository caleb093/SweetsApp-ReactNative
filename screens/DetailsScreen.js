import { View, Text, StyleSheet, Pressable, Image, Animated } from "react-native";
import Ionicons from '@expo/vector-icons/Entypo';
import AntDesign from "@expo/vector-icons/AntDesign";
import CakeSvg from '../assets/cake.svg'
import DonutSvg from '../assets/Donut.svg'
import BiscuitSvg from '../assets/cookies.svg'

import {data} from '../dummyData'
import {SvgUri} from "react-native-svg";
import { useState, useRef } from "react";


export default function DetailsScreen({route, navigation}) {
    const {id} = route.params
    const [isPressed, setIsPressed] = useState(false)
    const slideAnim = useRef(new Animated.Value(-1)).current;

    const currentData = data.filter(item => item.id == id)

    const slideIn = () => {
        Animated.timing(slideAnim, {
          toValue: -40,
          duration: 500,
          useNativeDriver: true,
        }).start();
      };


    
    const {name, price, text, type} = currentData[0]
    function typeImg() {
        if (type == 'donut') {
            return (
                <DonutSvg 
                width="100%"
                height="100%"                
                />
            )
        } else if (type == 'cake') {
            return (
                <CakeSvg 
                width="100%"
                height="100%"
                />            
            )
        } else {
            return (
                <BiscuitSvg 
                    width="100%"
                    height="100%"
                />
            )
        }
    }
    return (
        <View style={styles.screen}>


            <View style={styles.image_section}>

                {typeImg()}
                
                {/* <Image 
                    source={require('../assets/images1.png')}
                    style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                /> */}
            </View>
            <View style={styles.other_section}>
                <Text style={styles.h1Text}>{name}</Text>
                <Text style={styles.paragraph}>{text}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
                    <View style={{flexDirection: 'row', alignItems: "flex-end"}}>
                        <Ionicons name="star" size={22} color={'yellow'} />
                        <Ionicons name="star" size={22} color={'yellow'} />
                        <Ionicons name="star" size={22} color={'yellow'} />
                        <Ionicons name="star" size={22} color={'yellow'} />
                        <Ionicons name="star" size={22} color={'grey'} />
                        <Text>2.2k</Text>
                    </View>
                    <Pressable onPress={() => slideIn()}>
                        <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
                            <View style={[styles.priceContainer]}>
                                <Text style={{color: 'white'}} >{price}</Text>
                            </View>
                        </Animated.View>
                    </Pressable>
                </View>
                <Text style={styles.h3Text} >About this product</Text>
                <Text style={styles.paragraph}>Flavoured cupcakes with special icing. Flavoured CuoCkaes</Text>
                <View style={styles.icon_container}>
                    <View style={styles.heartContainer}>
                        {/* <Image source={require('../assets/Vector.png')} style={{height: 40, width: 40, resizeMode: 'contain'}}/> */}
                        <AntDesign name="hearto" size={32} color={'#FCB495'} />
                    </View>
                    <View style={styles.crement_container}>
                        <View style={styles.crement}>
                            <Text style={styles.crementText}>+</Text>
                        </View>
                        <View style={styles.crement}>
                            <Text style={styles.crementText}>-</Text>
                        </View>
                    </View>
                    {/* <Image source={require('../assets/ellipse/Ellipse11.png')} style={styles.heartIcon}/>
                    <Image source={require('../assets/ellipse/Ellipse12.png')} style={styles.heartIcon}/> */}
                </View>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Checkout')}>
                    <Text style={styles.button_text}>Buy Now</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white'
    },
    image_section: {
        flex: 1
    },
    other_section: {
        flex: 1,

    },
    h1Text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5
    },
    h3Text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        // marginTop: 10
    },
    paragraph: {
        fontSize: 14,
        color: '#888888',
        width: '70%',
        marginBottom: 15
    },
    icon_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    crement_container: {
        flex: 1,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heartContainer: {
        flex: 2
    },
    crement: {
        elevation: 5,
        shadowColor: 'black',
        // shadowOffset: {width: 1, height: -5},
        // shadowOpacity: 0.1,
        // shadowRadius: 3.98,

        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#FCB495',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    crementText: {
        color: 'white',
        fontSize: 25
    },
    button: {
        marginTop: 'auto',
        backgroundColor: '#3F3D56',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20
    },
    button_text: {
        color: 'white',
        fontWeight: 'bold'
    },
    priceContainer: {
        backgroundColor: '#FCB495',
        position: 'absolute',
        paddingLeft: 20,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        // right: -19,

    }
})