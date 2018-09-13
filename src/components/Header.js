import React from 'react';
import {View,Text} from 'react-native';

const Header =(props)=>{

    const {textStyle,viewStyle} = styles;

    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {

    textStyle:{
        fontSize:20,
        color:'white'
    },

    viewStyle:{
        backgroundColor:'#b19f79',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        shadowOffset:{width:0, height:5},
        shadowOpacity:0.8
    }


};

export default Header;