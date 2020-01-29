import React from 'react';
import { StyleSheet, Text, View, Image, Button  } from 'react-native';

export default class Publicacao extends React.Component {
    
    render(){
    console.log(this.props)
        return(
            <View class="publicacao conteiner-fluid">
                <View class="dados p-3">
                    <Image source={{uri: 'https://i.pravatar.cc/100'}} class="rounded" style={{height: 50, width: 50}}/>
                    <Text> {this.props.nomedoU} </Text>
                </View>
                <View class="imagem bg-secondary d-flex flex-column justify-content-center" style={{maxHeight: 390, height:390}}></View>
                <Image source= {{uri: this.props.post}} class="mn-100 img-fluid " style={{height:390, width:390}}/>            
               
            </View>        )
    }
}