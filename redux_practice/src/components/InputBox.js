import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native'

import { handleInputChange } from '../actions/changeNameAction'

import { connect } from 'react-redux'

class InputBox extends Component {

    handleChange(val) {
        this.props.handleInputChange(val)
    }

    render() { 
        return (  
            <View>
                <TextInput
                    style={{ borderColor: 'black', borderWidth: 2, padding: 5, margin: 10 }}
                    onChangeText={this.handleChange.bind(this)}
                    value={this.props.inputValue}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
}
 
export default connect(mapStateToProps, { handleInputChange })(InputBox);