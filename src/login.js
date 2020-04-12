import React from 'react';
import {Text,TextInput,Button,View} from 'react-native';

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
          <TextInput placeholder="Email"  onChangeText={(text)=>{this.setState({email:text})}} style={{ borderWidth: 2, borderColor: 'black', margin:5,width:200 }}></TextInput>
          <TextInput placeholder="Password"  onChangeText={(text)=>{this.setState({password:text})}} style={{ borderWidth: 2, borderColor: 'black', margin: 5,width:200 }}></TextInput>
          <Button title="submit" style={{width:5,}} onPress={()=>{this.submit()}}/>
        </View>
        </View>
  
      )
    }
  
  }
  export default App