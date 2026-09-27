import { SvgUri } from 'react-native-svg'
import { useState } from 'react'
import {View, Image , ScrollView , TextInput, Text, StyleSheet, Pressable} from 'react-native'
import {data} from '../dummyData'
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from '@expo/vector-icons/Feather'

export default function HomeScreen({navigation}) {
    const [initialLoad, setInitialLoad] = useState(true)
    const [currentSec, setCurrentSec] = useState('all')
    const [sectionData, setSectionData] = useState(data)
    // let test = data
    console.log(sectionData)
    console.log(data)

    function filterData(filterKey) {
        if (filterKey == 'all') {
            return setSectionData(data)
        } 
        // console.log(filterKey)
        const newData = data.filter(item => item.type == filterKey)
        setSectionData(newData)
    }


    const bg = 'rgba(255, 249, 243, 0.3)'
    return (
        <View style={styles.pageContainer}>
            {/* <Text>Home Page</Text> */}
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Search..' placeholderTextColor="#FFFFFF" />
                <Feather name="search" size={20} color={'white'} style={{position: 'absolute', right: 55, bottom: 48}}/>
            </View> 
            <View style={styles.sections}>
                <Text onPress={() => (filterData('all'), setCurrentSec('all'))} style={currentSec == 'all' ? {...styles.sectionsText, backgroundColor: bg} : styles.sectionsText} >All</Text>
                <Text onPress={() => (filterData('donut'), setCurrentSec('sweets')) } style={currentSec == 'sweets' ? {...styles.sectionsText, backgroundColor: bg} : styles.sectionsText} >Donut</Text>
                <Text onPress={() => (filterData('cake'), setCurrentSec('cakes'))} style={currentSec == 'cakes' ? {...styles.sectionsText, backgroundColor: bg} : styles.sectionsText} >Cakes</Text>
                <Text onPress={() => (filterData('biscuits'), setCurrentSec('candy'))} style={currentSec == 'candy' ? {...styles.sectionsText, backgroundColor: bg} : styles.sectionsText} >Biscuits</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.cardsContainer}>
                    <View style={styles.ItemList}>
                            {sectionData.map(item => 
                                {
                                    // console.log(item.image)
                                    return (
                                        <Pressable key={item.id} onPress={() => navigation.navigate('Details', {id: item.id, type: item.type})} style={[styles.cardItem, styles.shadowProp]}>
                                        <View style={{flex: 2}}>
                                            <Text>{item.name}</Text>
                                            <Text style={{fontWeight: '100', fontSize: 12, maxWidth: '70%', marginBottom: 10, marginTop: 10}}>{item.text}</Text>
                                            <Text style={{color: '#5AA72B'}}>{item.price}</Text>
                                        </View>
                                        <View style={{flex: 1}}>
                                            <View style={styles.imgContainer}>
                                                <AntDesign name="hearto" size={25} color={'#FCB495'} style={styles.heartIcon}/>
                                                {/* <Image source={require('../assets/Vector.png')} style={styles.heartIcon}/> */}
                                                <Image
                                                    source={item.image}
                                                    style={{width: 60, height: 60, resizeMode: 'contain'}}
                                                />
                                            </View>
                                        </View>
                                        </Pressable>
                                    )
                                }
                            )}

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        // flex: 1,
        backgroundColor: '#FCB495'
    },
    scrollView: {
        // backgroundColor: 'white',
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // marginTop: 60
    },
    inputContainer: {
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3.98
    },
    cardsContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        // paddingBottom: 0,
        marginTop: 30
    },
    ItemList: {
        marginTop: -50
    },
    shadowProp: {
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3.98,
      },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    input: {
        marginBottom: 10,
        width: '80%',
        marginTop: 20,
        marginBottom: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'rgba(255, 249, 243, 0.3)',
        // backgroundColor: '#FFF1F3'
    },
    sections: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 30
    },
    imgContainer: {
        // backgroundColor: 'grey'
    },
    heartIcon: {
        // backgroundColor: 'red',
        position: 'absolute',
        right: 0,
        marginTop: -8
    },
    sectionsText: {
        color: '#A75A39',
        // backgroundColor: 'rgba(255, 249, 243, 0.3)',
        padding: 2,
        paddingLeft: '4%',
        paddingRight: '4%',
        borderRadius: 10
    }
})