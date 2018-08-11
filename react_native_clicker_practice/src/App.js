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
            false, // need to update store or no
            {
                key: 'Bigger Finger',
                desc: 'x2 PpC',
                price: 5,
                owned: false
            }, {
                key: 'Even Bigger Finger',
                desc: 'x3 PpC',
                price: 10,
                owned: false
            }, {
                key: 'The Biggest Finger',
                desc: 'x5 PpC',
                price: 20,
                owned: false
            }, {
                key: 'Basic Autoclicker',
                desc: '+1 to PpS',
                price: 15,
                owned: false
            }, {
                key: 'Advanced Autoclicker',
                desc: '+5 to PpS',
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

                this.setState({  upgrades, points })

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
// export default connect(mapStateToProps, { gainPoints })(App)