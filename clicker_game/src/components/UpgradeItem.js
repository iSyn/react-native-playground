import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import { handleBuy, spendPoints } from '../actions'

class UpgradeItem extends Component {

    handlePress(upgrade) {

        let upgradePrice = upgrade.item.price

        if (this.props.header.points >= upgradePrice && !upgrade.item.owned) {
            this.props.handleBuy(upgrade)
            this.props.spendPoints(upgradePrice)
        }

    }

    render() { 

        let upgrade = this.props.upgrade

        return (  
            <TouchableOpacity onPress={ () => { this.handlePress(upgrade) } } disabled={upgrade.item.owned} >
                <View style={[styles.itemContainer, upgrade.item.owned ? { opacity: .3 } : null ]}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>{upgrade.item.key}</Text>
                        <Text style={{ color: 'white' }}>{upgrade.item.desc}</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white' }}>cost: {upgrade.item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center'
    }
}

const mapStateToProps = state => {
    return state
}
 
export default connect(mapStateToProps, { handleBuy, spendPoints })(UpgradeItem);