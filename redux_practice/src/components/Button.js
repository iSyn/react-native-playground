import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { changeNameAction } from '../actions/changeNameAction'

class Button extends Component {

    handlePress() {
        console.log('button press', this.props)
        this.props.changeNameAction(this.props.inputValue)
    }


    render() { 

        return (  
            <TouchableOpacity onPress={this.handlePress.bind(this)}>
                <View style={styles.buttonStyles}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Change Name</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    buttonStyles: {
        backgroundColor: 'black',
        padding: 30,
        margin: 10
    }
}

const mapStateToProps = state => {
    console.log('state', state)
    return state
}
 
export default connect(mapStateToProps, { changeNameAction })(Button);

