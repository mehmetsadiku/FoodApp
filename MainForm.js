import React from 'react'
import { View, Button, TextInput } from 'react-native'

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
    return (<View style={{margin:20,marginTop:100}}>
      <View>
        <TextInput placeholder="Email"  onChangeText={(text)=>{this.setState({email:text})}} style={{ borderWidth: 2, borderColor: 'black', margin:5,width:200 }}></TextInput>
        <TextInput placeholder="Password"  onChangeText={(text)=>{this.setState({password:text})}} style={{ borderWidth: 2, borderColor: 'black', margin: 5,width:200 }}></TextInput>
       
        
        
      </View>
      </View>

    )
  }

}
export default App