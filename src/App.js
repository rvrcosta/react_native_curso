import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// import Primeiro from './components/Primeiro'
// import CompPadrao , {Comp1,Comp2} from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/indireta/Pai'
// import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'

export default () => (
    <View style={style.NomeStyle}>
        {/* 
        
        <Primeiro/>
        <CompPadrao/>
        <Comp1/>
        <Comp2/>
        <MinMax min={3} max={20}/>
        <MinMax min="1" max="94"/>    
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Titulo principal="Cadatro Produto" secundario="Tela de Cadastro de Produto"/>
        <Botao/>
        <Contador inicial={0} passo={3}/>
        <Pai/>
        <ContadorV2/>

        */}
    
        <Diferenciar/>


    </View>
    )

const style = StyleSheet.create({
    NomeStyle: {        
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})

// function App(){
//     return <Text> Primeiro Component </Text>
// }

// const App = function (){
//     return <Text> Primeiro Component </Text>
// }

// export default ()=>{
//     return <Text> Primeiro Component </Text>
// }

// export default App

