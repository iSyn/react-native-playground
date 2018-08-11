import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

class Store extends Component {

    handleBuy = (upgrade) => {
        console.log('handle buy firing', upgrade)
        this.props.buyUpgrade(upgrade)
    }

    renderItem = (upgrade) => {

        console.log('renderItem firing')

        if (!upgrade.item.owned) {
            console.log('ITEM ISNT OWNED')
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
        } else {
            console.log('ITEM IS OWNED')
        }
    }

    
    renderList = () => {
        console.log('renderList firing')
        return (
            <FlatList
                data={this.props.upgrades}
                extraData={this.props}
                renderItem={this.renderItem}
            />
        )
    }

    render() { 
        console.log('re rendering', this.props.upgrades)
        return (  
            <View style={styles.storeContainer}>
                <Text style={{ paddingTop: 15, paddingBottom: 15, fontSize: 20 }}>STORE</Text>
                {this.renderList()}
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