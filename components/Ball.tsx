import React from 'react';
import {View , Text, StyleSheet, Pressable} from "react-native"

const BALL_SIZE = 30

const styles = StyleSheet.create({
    ball:{
        backgroundColor:"green",
        borderColor:"black",
        borderWidth:1,
        margin:"auto",
        borderRadius:100,
        width:BALL_SIZE,
        height:BALL_SIZE,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"

    }
})

const handlePress = (ballNumber:number)=>{
    console.log(`${ballNumber}`)
}

const Ball = ({children}:{children:number}) => {
    return <Pressable style={styles.ball} onPress={()=>handlePress(children)} ><Text>{children}</Text></Pressable>;
}



export default Ball;