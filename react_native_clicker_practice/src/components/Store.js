import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

class Store extends Component {

    componentWillUpdate = () => {
        console.log('component will update firing')
    }

    handleBuy = (upgrade) => {
        console.log('handle buy firing', upgrade)
        this.props.buyUpgrade(upgrade)
    }

    renderItem = (upgrade) => {

        console.log('RE RENDERING item', upgrade)

        if (!upgrade.item.owned) {
            return (
                <TouchableOpacity onPress={ () => {this.handleBuy(upgrade) }}>
                    <View style={ styles.itemContainer }>
                        <View style={{ flex: 1 }}>
                            <Text style={ styles.item }>{upgrade.item.key}</Text>
                            <Text>{upgrade.item.desc}</Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>Cost: {upgrade.item.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    render() { 

        return (  
            <View style={styles.storeContainer}>
                <Text style={{ paddingTop: 15, paddingBottom: 15, fontSize: 20 }}>STORE</Text>
                <FlatList
                    data={this.props.upgrades}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = {
    storeContainer: {
        flex: 1,
        borderTopWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    itemContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        fontSize: 15,

    }
}
 
export default Store;