import React, { Component } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, Animated, Easing } from 'react-native'
import { connect } from 'react-redux'

import { toggleStore } from '../actions'

import UpgradeItem from './UpgradeItem'

class StoreModal extends Component {

    constructor(props) {
        super(props)
        this.showModal = this.showModal.bind(this)
    }

    state = {
        storeVisible: false,

        animateUp: new Animated.Value(0),
        animateUpPlayed: false,

        animateDown: new Animated.Value(0),
        animateDownPlayed: false
    }

    closeModal() {
        this.animateDown()
    }

    showModal() {
        this.animateUp()
    }

    renderItem(upgrade) {
        return (
            <UpgradeItem upgrade={upgrade}/>
        )
    }

    animateUp() {
        Animated.timing( this.state.animateUp, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.linear
        }).start(() => {
            this.setState({ 
                storeVisible: true,
                animateUpPlayed: true
            })
        })
    }

    animateDown() {
        Animated.timing( this.state.animateDown, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.linear
        }).start(() => {
            this.setState({ 
                storeVisible: false,
                animateDownPlayed: false,
                animateUpPlayed: false,
                animateUp: new Animated.Value(0),
                animateDown: new Animated.Value(0)
            })
            this.props.toggleStore()
        })
    }

    renderStore() {

        console.log('render store firing')

        let showModal = this.props.store.showModal

        if (showModal) {

            if (!this.state.animateUpPlayed && !this.state.storeVisible) {
                console.log('FUCKING FIRING')
                this.showModal()
            }


            return (
                <Animated.View style={[styles.storeModalContainer, !this.state.storeVisible ? {
                    transform: [
                        { 
                            translateY: this.state.animateUp.interpolate({
                                inputRange: [0, 1],
                                outputRange: [800, 0]
                            })
                        }
                    ]
                } : {
                    transform: [
                        { 
                            translateY: this.state.animateDown.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 800]
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