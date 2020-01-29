import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Amigos extends React.Component {
    render(){
        return(
            <View>
                <View class="barra-amigos d-flex justify-content-around border-bottom p-2"style={{flexDirection: 'row', alignItems:'stretch' }}>
                    <Button type="Button" id="botao-amigo-1" class="btn btnOutlineSecondary roundedCircle bgWhite" title="X" />
                    <Button type="Button" id="botao-amigo-1" class="btn btnOutlineSecondary roundedCircle bgWhite" title="X" />
                    <Button type="Button" id="botao-amigo-1" class="btn btnOutlineSecondary roundedCircle bgWhite" title="X" />
                    <Button type="Button" id="botao-amigo-1" class="btn btnOutlineSecondary roundedCircle bgWhite" title="X" />
                    
                </View>    
            </View>)
    }
}