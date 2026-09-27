import { View, Text, StyleSheet, Pressable } from "react-native"

export default function CheckoutScreen() {
    return (
        <View style={{flex: 1, backgroundColor: '#e6e8e6'}}>
            <View style={styles.item_container}>
            <Text style={styles.header}>Items</Text>
                <View style={styles.item}>
                    <Text style={{color: 'grey'}}>CupCake</Text>
                    <Text style={{color: 'grey'}}>3.2$</Text>
                </View>
                <View style={styles.item}>
                    <Text style={{color: 'grey'}}>CupCake</Text>
                    <Text style={{color: 'grey'}}>3.2$</Text>
                </View>
                <View style={styles.item}>
                    <Text style={{color: 'grey'}}>CupCake</Text>
                    <Text style={{color: 'grey'}}>3.2$</Text>
                </View>
                <View style={styles.item}>
                    <Text style={{color: 'grey'}}>CupCake</Text>
                    <Text style={{color: 'grey'}}>3.2$</Text>
                </View>
            </View>

            <View style={styles.checkout_container}>
                <View style={styles.checkout_items}>
                    <Text>Subtotal: </Text>
                    <Text>$9.2</Text>
                </View>
                <View style={styles.checkout_items}>
                    <Text>Fees & Tax: </Text>
                    <Text>$0.5</Text>
                </View>
                <View style={styles.checkout_items}>
                    <Text>Gratuity: </Text>
                    <Text>15%</Text>
                </View>
                <Pressable style={styles.button}>
                    <Text style={styles.button_Text}>Pay  $9.2</Text>              
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        paddingBottom: 5
    },
    item_container: {
        backgroundColor: 'white',
        padding: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
        paddingTop: 10
    },

    checkout_container: {
        marginTop: 'auto',
        backgroundColor: 'white',
        padding: 20,
    },
    checkout_items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    button: {
        backgroundColor: '#3F3D56',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10
    },
    button_Text: {
        color: 'white'
    }
})


