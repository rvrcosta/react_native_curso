import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

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
import DigiteSeuNome from './components/DigiteSeuNome'
import If from './components/If'
import FlexBoxV1 from './components/layout/FlexBoxV1'
import FlexBoxV2 from './components/layout/FlexBoxV2'
import FlexBoxV3 from './components/layout/FlexBoxV3'
import FlexBoxV4 from './components/layout/FlexBoxV4'
import Quadrado from './components/layout/Quadrado'
import ParImpar from './components/ParImpar'
import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import UsuarioLogado from './components/UsuarioLogado'

export default () => (
    <SafeAreaView style={style.NomeStyle}>
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
        <Diferenciar/>
        <ParImpar num="1"/>
        
        <Familia>
            <Membro nome="Rodrigo" sobrenome="Costa"></Membro>
            <Membro nome="Michelle" sobrenome="Costa"></Membro>
            <Membro nome="Cristina" sobrenome="Rocha"></Membro>
        </Familia>

        <Familia>
            <Membro nome="Pericles" sobrenome="Santos"></Membro>
            <Membro nome="Samara" sobrenome="Silva"></Membro>
        </Familia>  
        
        <UsuarioLogado usuario={ {nome: 'Gui', email: 'rvrcosta@outlook.com' } }></UsuarioLogado>
        <UsuarioLogado usuario={ {nome: 'Ana'} }></UsuarioLogado>
        <ListaProdutos></ListaProdutos>
        <ListaProdutosV2></ListaProdutosV2>
        <DigiteSeuNome></DigiteSeuNome>
        <Quadrado/>
        <Quadrado cor="#2e5c43"/>
        <Quadrado cor="#034"/>
        <Quadrado cor="#ff1"/>
        <FlexBoxV1/>
        <FlexBoxV2/>
        <FlexBoxV3/>
        */}

        <FlexBoxV4/>
        </SafeAreaView>
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

