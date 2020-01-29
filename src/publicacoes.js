import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Publicacao from './publicacao.js'

export default class Publicacoes extends React.Component {
            constructor(){
                super()
                        this.state = { 
                    posts:[
                        // {
                        //     fotodoU:fotodoU,
                        //     nomedoU:'Giorno Giovanna',
                        //     post: 'https://i.ytimg.com/vi/YFOhH_3Zfs8/maxresdefault.jpg'
        
                        // },
        
                        // {
                        //     fotodoU:fotodoU,
                        //     nomedoU:'Dio Brando',
                        //     post: 'https://images7.memedroid.com/images/UPLOADED818/5ddc618db7016.jpeg'
                        // }
                    ]
        
                }
            }
            async componentDidMount (){
                const url = await fetch ('https://meme-api.herokuapp.com/gimme/food/50')
                const posts = await url.json()
                this.setState({
                    posts: posts.memes.map(item => {
                        return item
                    })
                })
        
            }
            render(){
                return(
                    <ScrollView>
                    {
                        this.state.posts.map ((post)=> { 
                            return(
                                <Publicacao nomedoU={'Teste'} fotodoU={post.fotodoU} post={post.url}/>  
                            )
                        })
                    }
                    </ScrollView>
                )
            }
}