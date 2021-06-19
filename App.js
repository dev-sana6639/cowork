import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {StatusBar,View} from 'react-native';
import * as appcolors from './src/utils/colors';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppRouter from './AppRouter';
import NavigationService from './src/utils/navigation'

const { store, persistor } = configureStore();

const App = () => {

 
 
  return (
    <NavigationContainer
     ref={navigationRef =>
     NavigationService.setTopLevelNavigator(navigationRef)
    } >
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
          {/* <StatusBar barStyle="light-content" backgroundColor={'#E5E5E5'} /> */}
            
             
            <AppRouter />
           
           
           

          </PersistGate>

        </Provider>

      </SafeAreaProvider>

    </NavigationContainer>
  )

}


export default App;