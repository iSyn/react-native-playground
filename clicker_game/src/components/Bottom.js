import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'

import { toggleStore } from '../actions' 

class Bottom extends Component {

    handleStorePress() {
        this.props.toggleStore()
    }

    render() { 
        return (  
            <View style={ styles.containerStyles }>

                <TouchableWithoutFeedback onPress={this.handleStorePress.bind(this)}>
                    <View style={ styles.optionStyles }>
                        <Text style={ styles.optionTextStyles }>Store</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        );
    }
}

const styles = {
    containerStyles: {
        flexDirection: 'row',
        borderTopWidth: 2,
        borderColor: '#222',
        marginTop: 10
    },
    optionStyles: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },
    optionTextStyles: {
        fontSize: 30,
        textAlign: 'center'
    }
}

const mapStateToProps = state => {
    const { store } = state
    return { store }
}
 
export default connect(mapStateToProps, { toggleStore })(Bottom);