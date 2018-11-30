import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Coffe extends Component {
    render(){
        const {type, volume, info} = this.props;
        return(
            <View>
                <Text>My Coffe</Text>
                <Text>Type : {type}</Text>
                <Text>Volume : {volume}</Text>
            </View>
        )
    }

}
export default Coffe;