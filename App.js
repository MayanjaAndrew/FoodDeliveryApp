import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { Home, Restuarant, OrderDelivery } from './screens'
import Tabs from './navigation/Tabs';

const Stack= createStackNavigator();

const App =()=>{
    return(
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Tabs}/>
          <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
          <Stack.Screen name="Restuarant" component={Restuarant}/>

        </Stack.Navigator>
      </NavigationContainer>
    )

}

export default App;


