import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, Animated } from 'react-native'
import { connect } from 'react-redux'

import { toggleStore } from '../actions'

import UpgradeItem from './UpgradeItem'

class StoreModal extends Component {

    state = {
        animated: new Animated.Value(0),
        animationPlayed: false
    }

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

    startAnimation() {
        Animated.timing( this.state.animated, {
            toValue: 1,
            duration: 100
        }).start(this.setState({ animationPlayed: true }))
    }

    renderStore() {

        let showModal = this.props.store.showModal

        if (showModal) {

            if (!this.state.animationPlayed) {
                this.startAnimation()
            }

            return (
                <Animated.View style={[styles.storeModalContainer, {
                    transform: [
                        {
                            translateY: this.state.animated.interpolate({
                                inputRange: [0, 1],
                                outputRange: [5000, 0]
                            })
                        }
                    ]
                }]}>
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

                </Animated.View>
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