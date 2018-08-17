import React, { Component } from 'react';
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

import { gainEnergy } from '../actions/headerActions'

class Header extends Component {

    componentDidMount() {
        setInterval(() => {
            console.log('firing')
            this.props.gainEnergy()
        }, 1000 * 5)
    }

    render() { 
        return (  
            <View style={styles.headerStyles}>
                <Text style={[ styles.headerTextStyles, { flexGrow: 1 }]}>Points: {this.props.header.points}</Text>
                <Text style={ styles.headerTextStyles }>Energy: {this.props.header.currentEnergy}/{this.props.header.maxEnergy}</Text>
            </View>
        );
    }
}

const styles = {
    headerStyles: {
        flexDirection: 'row',
        margin: 10,
        padding: 15,
        borderColor: '#222',
        borderWidth: 1
    },
    headerTextStyles: {
        fontSize: 20
    }
}

const mapStateToProps = state => {
    return state
}
 
export default connect(mapStateToProps, { gainEnergy })(Header);