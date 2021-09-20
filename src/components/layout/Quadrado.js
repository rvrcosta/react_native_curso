import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default props => { 
    const lado = props.lado || 50
return (
   <View style={{height:lado, width:lado,backgroundColor: props.cor || '#000'}}> 


   </View>
)}

// return (
//     <View style={style.quadrado}> 
 
 
//     </View>
//  )}

// const style = StyleSheet.create({
//     quadrado:{
//         height:20,
//         width: 20,
//         backgroundColor: props.cor  ? props.cor : '#000'
//     }
// })