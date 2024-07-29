import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { ImageBackground } from "react-native";
import Home from "../screens/Home";
import  Settings from "../screens/Settings"
import Add from "../screens/Add"

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) =>(
    <TouchableOpacity
    style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        ...styles.shadow
    }}
        onPress={onPress}
    >
        <View style={{
            width:70,
            height:70,
            borderRadius:35,
            backgroundColor:'#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

// const Tabs = (userId)=>{
const Tabs = ({ route }) => {
    const { userId } = route.params;
    return(
        <Tab.Navigator
        tabBarOptions = {{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom:25,
                left:20,
                elevation:0,
                backgroundColor: '#fffff',
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}
        >
            <Tab.Screen name = "Home" 
            component={Home}
            initialParams={{ userId }} 
            options={{
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, width: 60 }}>
                        <Image
                        source={require('../assets/home.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            height:25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text 
                            style = {{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                            HOME
                        </Text>
                    </View>
                ),
                }}/>


                <Tab.Screen 
                name = "Add" 
                component={Add} 
                initialParams={{ userId }}
                options={{
                    headerShown: false,
                    tabBarIcon:({focused}) => (
                        <Image
                            source={require('../assets/plus.png')}
                            resizeMode="contain"
                            style={{
                                width:30,
                                height:30,
                                tintColor:'#fff'
                            }}
                        />
                    ),
                    tabBarButton: (props) =>(
                        <CustomTabBarButton {...props}/>
                    )

                }}
                />




                <Tab.Screen name = "Settings" component={Settings} options={{
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, width: 60 }}>
                        <Image
                        source={require('../assets/settings.png')}
                        resizeMode = 'contain'
                        style = {{
                            width:25,
                            height:25,
                            tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                        />
                        <Text 
                            style = {{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                            Settings
                        </Text>
                    </View>
                ),
                }}/>
        </Tab.Navigator>

        
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5
    }
})

export default Tabs;