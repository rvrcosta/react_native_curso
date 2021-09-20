import React, { Component } from 'react'
import { View, Button, Text, TextInput, StyleSheet } from 'react-native'
import Estilo from '../estilo'
import NumeroMega from './NumeroMega'

export default class Mega extends Component{

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         qtdeNumeros: this.props.qtdeNumeros
    //     }
    // }

    alterarQtdeNumero = (qtde) => {
        this.setState({qtdeNumeros: +qtde})
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
                    .fill()
                    .reduce(n => [...n, this.gerarNumeroNaoContido(n)],[])
                    .sort((a,b) => a-b)

        this.setState({numeros})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random()*60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    exibirNumeros = ()=>{
        const nums = this.state.numeros
        return nums.map(num=> <NumeroMega key={num} num={num} />);
    }

    render(){
        return (
            <>
                <Text style={Estilo.txtG}>Gerador de mega sena</Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtde de Números" 
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button title="Gerar" onPress={this.gerarNumeros} />
                <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                    {this.exibirNumeros()}

                </View>
            </>
        )
    }

}