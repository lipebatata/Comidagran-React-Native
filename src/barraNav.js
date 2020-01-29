import React from 'react';
import { StyleSheet, Text, View, Button,  } from 'react-native';

export default class BarraNav extends React.Component {
    render(){
        return(
            <View className="navbar navbar-light border-bottom" style={{backgroundColor: '#e3f2fd'}}>
                <Button type="Button" id="tirarfoto" className="btn btn-outline-danger" title="Tirar foto"/>
                <Button className="navbar-brand" href="#" title="Comidagran"/>
                <View className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <View className="navbar-nav">
                    <Button className="nav-item nav-link active" href="#" title="Home"></Button>
                    <Button className="nav-item nav-link" href="#" title="Novo Post"></Button>
                  </View>
                </View>
             </View>  
        )
    }
}