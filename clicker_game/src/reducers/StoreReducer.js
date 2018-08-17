import {
    TOGGLE_STORE,
    HANDLE_BUY
} from '../types'

const INITIAL_STATE = {
    upgrades: [
        {
            key: 'Thick Fingers',
            desc: 'Doubles PpT',
            price: 20,
            owned: false
        },
        {
            key: 'Double Tap',
            desc: 'Doubles PpT',
            price: 40,
            owned: false
        },
        {
            key: 'Unknown Upgrade 1',
            desc: 'undefined',
            price: 999,
            owned: false
        },
        {
            key: 'Unknown Upgrade 2',
            desc: 'undefined',
            price: 999,
            owned: false
        },
        {
            key: 'Unknown Upgrade 3',
            desc: 'undefined',
            price: 999,
            owned: false
        },
        {
            key: 'Unknown Upgrade 4',
            desc: 'undefined',
            price: 999,
            owned: false
        },
        {
            key: 'Unknown Upgrade 5',
            desc: 'undefined',
            price: 999,
            owned: false
        },
        {
            key: 'Unknown Upgrade 6',
            desc: 'undefined',
            price: 999,
            owned: false
        },
        {
            key: 'Unknown Upgrade 7',
            desc: 'undefined',
            price: 999,
            owned: false
        },

    ],
    showModal: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case TOGGLE_STORE:
            return {
                ...state,
                showModal: !state.showModal
            }
        case HANDLE_BUY:

            let newUpgrades = state.upgrades.map((upgrade) => {

                console.log('upgrade.key', upgrade.key)
                console.log('action.payload.item.key', action.payload.item.key)

                if (upgrade.key == action.payload.item.key) {
                    return { ...upgrade, owned: true }
                } else {
                    return upgrade
                }
            })

            return { ...state, upgrades: newUpgrades }
        default:
            return state
    }

}