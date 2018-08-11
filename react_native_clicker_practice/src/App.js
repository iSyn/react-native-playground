import React, { Component } from 'react';
import { View, Text } from 'react-native'

import Header from './components/Header'
import ClickerButton from './components/ClickerButton'
import FakeNav from './components/FakeNav'
import Store from './components/Store'

class App extends Component {

    state = {
        points: 0,
        pointsPerClick: 1,
        upgrades: [
            {
                key: 'Bigger Finger',
                desc: 'x2 PpC',
                multi: 2,
                price: 5,
                owned: false
            }, {
                key: 'Even Bigger Finger',
                desc: 'x3 PpC',
                multi: 3,
                price: 10,
                owned: false
            }, {
                key: 'The Biggest Finger',
                desc: 'x5 PpC',
                multi: 5,
                price: 20,
                owned: false
            }, {
                key: 'Basic Autoclicker',
                desc: '+1 to PpS',
                multi: 2,
                price: 15,
                owned: false
            }, {
                key: 'Advanced Autoclicker',
                desc: '+5 to PpS',
                multi: 2,
                price: 20,
                owned: false
            }
        ],
    }

    addPoint = () => {
        let points = this.state.points + this.state.pointsPerClick
        this.setState({ points })
        console.log('points:', this.state.points)
    }

    buyUpgrade = (upgrade) => {
        console.log('state:', this.state)
        console.log('buyUpgrade firing', upgrade)
        if (!upgrade.item.owned) {
            if (this.state.points >= upgrade.item.price) {

                let upgrades = this.state.upgrades
                upgrades[upgrade.index].owned = true

                let points = this.state.points
                points -= upgrade.item.price

                let pointsPerClick = this.state.pointsPerClick
                pointsPerClick *= upgrade.item.multi

                this.setState({  upgrades, points, pointsPerClick })

            }
        }
    }

    render() { 
        return (  

            <View style={styles.containerStyles}> 
                <Header />
                <Text style={{ textAlign: 'center', fontSize: 30 }}>Points: {this.state.points}</Text>
                <ClickerButton addPoint={this.addPoint.bind(this)}/>
                <Store buyUpgrade={this.buyUpgrade} upgrades={this.state.upgrades}/>
                {/* <FakeNav /> */}
            </View>
        );
    }
}

const styles = {
    containerStyles: {
        flex: 1,
        // backgroundColor: 'red'
    }
}
 
export default App