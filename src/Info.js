import React from 'react';
import {Text,TextInput,Button,View,Image} from 'react-native';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        name: '',
        email: '',
        password: '',
      }
    }
    submit(){
      console.warn(this.state)
    }
    render() {
      return (<View style={{margin:20}}>
        <View>
          <Image source={require('./src/vajza.jpg')} style={{width:200,height:200}}/>
          <Text onChangeText={(text)=>{this.setState({name:text})}} style={{ margin:5,width:200 }}>RESTORANT</Text>
          <Text onChangeText={(text)=>{this.setState({name:text})}} style={{ margin:5,width:200 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
          <Text onChangeText={(text)=>{this.setState({name:text})}} style={{ margin:5,width:200 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</Text>
          
          
        </View>
        </View>
  
      )
    }
  
  }
  export default App