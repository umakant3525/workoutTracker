import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import Screen7 from './screens/Screen7';
import BottomTabs from './components/BottomTabs';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
          {/* <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
       <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
        <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} />
        <Stack.Screen name="Screen4" component={Screen4} options={{ headerShown: false }} /> 
        <Stack.Screen name="Screen5" component={Screen5} options={{ headerShown: false }} />
         <Stack.Screen name="Screen6" component={Screen6} options={{ headerShown: false }} />   */}
        <Stack.Screen name="Screen7" component={Screen7} options={{ headerShown: false }} /> 
        {/* <Stack.Screen name="BottomTab" component={BottomTabs} options={{ headerShown: false }} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

