// import * as React from 'react';
// import { Drawer } from 'react-native-paper';
// import { NavigationContainer } from '@react-navigation/native';
// import BottomTabNavigator from "./TabNavigator"



// const MyComponent = () => (

//     <NavigationContainer>
//         <BottomTabNavigator />
//         <Drawer.CollapsedItem
//             focusedIcon="inbox"
//             unfocusedIcon="inbox-outline"
//             label="Inbox"
//         />
//     </NavigationContainer>

// );

// export default MyComponent;


// const MyComponent = () => {
//     const [active, setActive] = React.useState('');

//     return (
//         <NavigationContainer>
//             < BottomTabNavigator />
//             <Drawer.Section title="Some title">
//                 <Drawer.Item
//                     label="First Item"
//                     active={active === 'first'}
//                     onPress={() => setActive('first')}
//                 />
//                 <Drawer.Item
//                     label="Second Item"
//                     active={active === 'second'}
//                     onPress={() => setActive('second')}
//                 />
//             </Drawer.Section>
//         </NavigationContainer>
//     );
// };

// export default MyComponent;



// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
// } from '@react-navigation/drawer';
// import Home from '../screens/HomeScreens';
// import India from '../screens/Country/India';
// import Japan from '../screens/Country/Japan';



// const Drawer = createDrawerNavigator();
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={Home} />
//                 <Drawer.Screen name="India" component={India} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }

// // // function Feed({ navigation }) {
// // //     return (
// // //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// // //             <Text>Feed Screen</Text>
// // //             <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
// // //             <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
// // //         </View>
// // //     );
// // // }

// // // function Notifications() {
// // //     return (
// // //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// // //             <Text>Notifications Screen</Text>
// // //         </View>
// // //     );
// // // }

// // // function CustomDrawerContent(props) {
// // //     return (
// // //         <DrawerContentScrollView {...props}>
// // //             <DrawerItemList {...props} />
// // //             <DrawerItem
// // //                 label="Close drawer"
// // //                 onPress={() => props.navigation.closeDrawer()}
// // //             />
// // //             <DrawerItem
// // //                 label="Toggle drawer"
// // //                 onPress={() => props.navigation.toggleDrawer()}
// // //             />
// // //         </DrawerContentScrollView>
// // //     );
// // // }

// // // const Drawer = createDrawerNavigator();

// // // function MyDrawer() {
// // //     return (
// // //         <Drawer.Navigator
// // //             useLegacyImplementation
// // //             drawerContent={(props) => <CustomDrawerContent {...props} />}
// // //         >
// // //             <Drawer.Screen name="India" component={India} options={{ headerShown: true }} />
// // //             <Drawer.Screen name="Japan" component={Japan} options={{ headerShown: true }} />
// // //         </Drawer.Navigator>
// // //     );
// // // }

// // // // export default MyDrawer;

// // // export default function App() {
// // //     return (
// // //         <NavigationContainer>
// // //             <MyDrawer />
// // //         </NavigationContainer>
// // //     );
// // // }




// // import React, { useEffect, useState, } from 'react';
// // import { Switch } from 'react-native'
// // import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";

// // import { Ionicons } from '@expo/vector-icons';

// // import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
// // import { EventRegister } from 'react-native-event-listeners'
// // import theme from '../config/theme'
// // import themeContext from '../config/themeContext';

// // import TabNavigator from "./TabNavigator";
// // import Health from "../screens/Health";
// // import Business from "../screens/Business";
// // import Sports from "../screens/Sports";
// // import Tech from "../screens/Tech";

// // //country news
// // import India from '../screens/Country/India';
// // import Japan from '../screens/Country/Japan';
// // import Germany from '../screens/Country/Germany';
// // import US from '../screens/Country/US';
// // import Canada from '../screens/Country/Canada';
// // import Australia from '../screens/Country/Australia';
// // import NewZealand from '../screens/Country/NewZeal';

// // import DrawerContent from "./DrawerContent";

// // const Drawer = createDrawerNavigator();

// // const DrawerNavigator = () => {

// //     const [isEnabled, setIsEnabled] = useState(false);

// //     useEffect(() => {
// //         let eventListener = EventRegister.addEventListener(
// //             'themeChange',
// //             (data) => {
// //                 setIsEnabled(data);
// //                 console.log(data);
// //             }
// //         );
// //         return () => {
// //             EventRegister.removeEventListener(eventListener);
// //         };
// //     });

// //     return (
// //         <themeContext.Provider value={isEnabled === true ? theme.light : theme.dark}>
// //             <NavigationContainer theme={isEnabled === true ? DarkTheme : DefaultTheme}>
// //                 <Drawer.Navigator
// //                     initialRouteName="Home"
// //                     drawerContent={(props) => <DrawerContent {...props} />}
// //                 >
// //                     <Drawer.Screen name="Home" component={TabNavigator} options={{
// //                         headerShown: false, drawerIcon: ({ focused, size }) => (
// //                             <Ionicons
// //                                 name="md-home"
// //                                 size={size}
// //                                 color={focused ? '#2E5BE3' : '#Da3349'}
// //                             />
// //                         ),
// //                     }} />
// //                     <Drawer.Screen name="India" component={India} options={{ headerShown: true }} />
// //                     <Drawer.Screen name="US" component={US} options={{ headerShown: true }} />
// //                     <Drawer.Screen name="Canada" component={Canada} options={{ headerShown: true }} />
// //                     <Drawer.Screen name="Australia" component={Australia} options={{ headerShown: true }} />
// //                     <Drawer.Screen name="New Zealand" component={NewZealand} options={{ headerShown: true }} />
// //                     <Drawer.Screen name="Japan" component={Japan} options={{ headerShown: true }} />
// //                     <Drawer.Screen name="Germany" component={Germany} options={{ headerShown: true }} />
// //                 </Drawer.Navigator>
// //             </NavigationContainer>
// //         </themeContext.Provider>
// //     );
// // }

// // export default DrawerNavigator;