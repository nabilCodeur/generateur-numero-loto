import { gridNumbers } from '@/constants/numbers';
import React from 'react';
import { View , Text, StyleSheet } from 'react-native';
import Ball from './Ball';

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        flexWrap:"wrap",
        height:"100%",
        gap:3,
        width:"90%"
        

    }
})

const handlePress = () => {
    console.log("hello ball")
}


const GridComponent = ({min,max}:{min:number,max:number}) => {

    const grid = gridNumbers(min,max)
    return  <View style={styles.container} >{grid.map(current=><Ball key={current} >{current}</Ball>)}</View>
        
    
}



export default GridComponent;