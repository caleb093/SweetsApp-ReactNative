import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer"
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CustomDrawerComponent(props) {
    return(
        <DrawerContentScrollView {...props} style={{backgroundColor: 'rgba(252, 180, 149, 1)'}}>
            <Ionicons name="fast-food" size={40} color={'white'} style={{marginBottom: 15, marginLeft: 10}}/>
            <DrawerItemList {...props} inactiveTintColor={'white'} />
            <DrawerItem 
            inactiveTintColor={'white'}
              label="Test"
              color="white" //as this is not working
              onPress={() => {
                props.navigation.navigate("Test");
              }}
            />
        </DrawerContentScrollView>
    )
}