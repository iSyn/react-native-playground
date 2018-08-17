import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux'

class Header extends Component {
    render() { 

        console.log('HEADER', this.props)

        return (  

            <View>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>Hello {this.props.name}</Text>
            </View>
        );
    }
}
 
const mapStateToProps = state => {
    console.log('mapstatetoprops state', state)
    return state
}

export default connect(mapStateToProps, null)(Header);