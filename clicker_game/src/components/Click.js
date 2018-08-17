import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native'
import { connect } from 'react-redux'

import { gainPoint } from '../actions/headerActions'

class Click extends Component {

    handlePress() {
        this.props.gainPoint()
    }

    render() { 
        return (  
            <TouchableWithoutFeedback onPress={this.handlePress.bind(this)} style={{ zIndex: 0 }}>
                <View style={styles.buttonStyles}>
                    <Text style={{ fontSize: 40, color: 'white' }}>Tap Me</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    buttonStyles: {
        backgroundColor: 'rebeccapurple',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
}
 
export default connect(null, { gainPoint })(Click);