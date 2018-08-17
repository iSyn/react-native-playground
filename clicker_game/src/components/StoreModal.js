import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { toggleStore } from '../actions'

import UpgradeItem from './UpgradeItem'

class StoreModal extends Component {

    closeModal() {
        this.props.toggleStore()
    }

    handlePress(upgrade) {
        console.log('pressed', upgrade)
    }

    renderItem(upgrade) {
        return (
            <UpgradeItem upgrade={upgrade}/>
        )
    }


    renderStore() {

        let showModal = this.props.store.showModal

        if (showModal) {
            return (
                <View style={styles.storeModalContainer}>
                    <View style={styles.storeModalHeader}>
                        <Text style={styles.storeHeaderText}>STORE</Text>
                        <TouchableWithoutFeedback onPress={this.closeModal.bind(this)}>
                            <View>
                                <Text style={styles.storeHeaderText}>close</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <FlatList 
                        data={this.props.store.upgrades}
                        renderItem={this.renderItem}
                    />

                </View>
            )
        } else {
            return null
        }        
    }

    render() { 
        return (
            this.renderStore()
        );
    }
}

const styles = {
    storeModalContainer: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'black',
        left: 0,
        right: 0,
        top: 79,
        bottom: 0,
    },
    storeModalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    storeHeaderText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        padding: 10
    },
}

const mapStateToProps = state => {
    const { store } = state
    return { store }
}
 
export default connect(mapStateToProps, { toggleStore })(StoreModal);