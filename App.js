import React from 'react';
import {View,Text} from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';

const App =()=>{

  return(
      <View style={{flex:1}}>
        <Header headerText={'deneme'}/>
          <Liste/>
      </View>
  );
};

export default App;