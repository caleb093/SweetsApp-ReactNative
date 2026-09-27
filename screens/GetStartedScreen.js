import { useState } from 'react'
import {View, Pressable , Text, Image, Button, StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated'

export default function GetStartedScreen({setShowSplash}) {

    const [initialLoad, setInitialLoad] = useState(true)

    return (
        <View style={styles.splashContainer}>
            {/* <Text style={{color: 'white'}}>HELlo</Text> */}
            <View style={styles.imgSection}>
                <View style={styles.imgContainer}>
                    <Image style={{position: 'absolute', left: 0, top: -30}} source={require('../assets/ellipse/Ellipse3.png')}/>
                    <Image style={{position: 'absolute', bottom: -40, left: 30}} source={require('../assets/ellipse/Ellipse4.png')}/>
                    <Image style={{position: 'absolute', bottom: -20, left: 140}} source={require('../assets/ellipse/Ellipse6.png')}/>
                    <Image style={{position: 'absolute', top: 30, right: -20}} source={require('../assets/ellipse/Ellipse5.png')}/>
                    <Image style={{position: 'absolute', top:-80, right: 30}} source={require('../assets/ellipse/Ellipse2.png')}/>
                    <Image 
                        source={require('../assets/getStarted.png')}
                    />
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.headText}>Sweets Ordering App</Text>
                <Text style={styles.text}>Order your favorite desert.</Text>
                <Text style={styles.text}>Here!</Text>
                <Pressable 
                    onPress={() => setShowSplash(false)}
                    style={styles.button}
                    android_ripple={{color: '#dddddd'}} // for Andriod
                >
                    <Text style={{color: 'white'}}>Get Started</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100%',
        backgroundColor: '#3F3D56'
    },

    imgSection: {
        flex: 1.4,
        justifyContent: 'flex-end'
    },
    imgContainer: {
        // flex: 1,

        backgroundColor: 'rgba(228, 176, 237, 0.3)',
        // justifyContent: 'center',
        alignItems: 'center',
        width: 220,
        height: 220,
        borderRadius: 110,
        marginBottom: 70
    },
    headText: {
        color: 'white',
        fontSize: 25,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    textContainer: {
        flex: 1,
        // backgroundColor: 'red'
    },
    button: {
        backgroundColor: '#FCB495',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginBottom: 70,
        marginTop: 'auto'
    }

})

