// import React,{Component} from 'react';
// import {View, Button, Text} from 'react-native';

// import Header from './components/Header';
// export default class App extends Component{
//   state = {
//     number: 0,
//   }

//   handleClick(){
//     //alert('YOu Clicked')
//     this.setState({
//       number: this.state.number + 1
//     });
//   }

//   render(){
//     return(
//       <View>
//         <Button onPress={()=>this.handleClick()} title="Click ME!!"/>
//         <Text>{this.state.number}</Text>
//       </View>
//     )
//   }
// }



import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './components/Header';
import Styles from './components/Styles'

export default class App extends Component{
  render(){
    return(
      <View style={Styles.container}>
        <View style={Styles.header}><Text></Text></View>
        <View style={Styles.footer}><Text style={styles.footerText}>Ini footer</Text></View>
      </View>
    )
  }
}


