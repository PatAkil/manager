// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ props.headerText }</Text>
    </View>
  );
};
  

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    height: 60,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    ShadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};


// Make the component available to other parts of the app
export { Header };
