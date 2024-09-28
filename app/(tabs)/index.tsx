import { Image, StyleSheet, Platform, StatusBar, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { getSeriesNumbers, mainNumbersEuromillions,starNumberEuromillions } from '@/utils/randomNumber';
import {Text , View , Button} from "react-native"
import GridComponent from '@/components/GridComponent';
import { EUROMILLIONS_MAX_MAIN, EUROMILLIONS_MAX_STAR, EUROMILLIONS_MIN_MAIN, EUROMILLIONS_MIN_STAR, LOTO_MAX_MAIN, LOTO_MIN_MAIN } from '@/constants/numbers';
import { useState } from 'react';
import ResultSerie from '@/components/ResultSerie';

export default function HomeScreen() {

  const [mainNumbersEuromillionsState, setMAinNumbersEuromillions ] = useState<number[]>(mainNumbersEuromillions)
  const [starNumbersEuromillionsState , setStarNumberEuromillions] = useState<number[]>(starNumberEuromillions)

  const handlePress = ()=>{
     setMAinNumbersEuromillions(getSeriesNumbers(5,EUROMILLIONS_MIN_MAIN, EUROMILLIONS_MAX_MAIN))
     setStarNumberEuromillions(getSeriesNumbers(2,EUROMILLIONS_MIN_STAR, EUROMILLIONS_MAX_STAR))
    console.log("Bonjour")
  }


  return (
          <View style={styles.container} >
            <StatusBar barStyle={"dark-content"} backgroundColor={"#ffffff" } />
            <View style={styles.containerAfterTopBAr}>
         <Text style={{color:"red"}}>Résultats euromillions</Text>
          <Text>Tirage principal {mainNumbersEuromillionsState.join("-")}</Text>
          <Text>Torage étoiles {starNumbersEuromillionsState.join("-")}</Text>
        
        <GridComponent min={LOTO_MIN_MAIN} max={LOTO_MAX_MAIN}/>
        <Pressable style={styles.button} onPress={handlePress} >
            <Text style={styles.textButton}>{"Réinitialiser Euromillions 323".toUpperCase()}</Text>
          </Pressable>
        <ResultSerie listMain={mainNumbersEuromillions} listStar={starNumberEuromillions}></ResultSerie>
          </View>
  

         </View>

 
    

  );
}


const styles = StyleSheet.create({
container:{
 margin:10
},
containerAfterTopBAr:{
  paddingTop:StatusBar.currentHeight
},
button:{
  width:"50%",
  alignItems:"center",

  backgroundColor:"blue",
  color:"white",
},
textButton:{
color:"white"
}
});
