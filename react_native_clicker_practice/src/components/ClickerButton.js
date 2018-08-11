import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native'

class Button extends Component {

    constructor(props) {
        super(props)
        this.animatedValue = new Animated.Value(0)
    }

    state = {
        buttonScale: new Animated.Value(1)
    }

    handlePress = () => {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 500
        }).start()
        this.props.addPoint()
    }

    render() {

        let { buttonScale} = this.state

        return (  
            <View style={styles.buttonContainerStyles}>
                <TouchableOpacity onPress={this.handlePress} style={{ flex: 1 }}>
                    <Animated.View 
                        style={
                            [
                                styles.buttonStyles,
                                {
                                    transform: [
                                        {
                                            scaleX: this.animatedValue.interpolate({
                                                inputRange: [0, 1, 2],
                                                outputRange: [1, .5, 1]
                                            })
                                        }, {
                                            scaleY: this.animatedValue.interpolate({
                                                inputRange: [0, 1, 2],
                                                outputRange: [1, .5, 1]
                                            })
                                        }
                                    ]
                                }
                            
                            ]
                        }
                    >
                        <Text style={styles.buttonTextStyles}>CLICK ME</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    buttonContainerStyles: {
        flex: 1,
        padding: 30,
    },
    buttonStyles: {
        borderWidth: 2,
        borderColor: '#222',
        flex: 1,
        justifyContent: 'center',
    },
    buttonTextStyles: {
        alignSelf: 'center',
        fontSize: 20
    }
}

 
export default Button;