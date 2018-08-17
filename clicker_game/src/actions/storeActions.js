import {
    TOGGLE_STORE,
    HANDLE_BUY,
    SPEND_POINTS
} from '../types'

export const toggleStore = () => {
    return {
        type: TOGGLE_STORE,
        payload: null
    }
}

export const handleBuy = (upgrade) => {
    return {
        type: HANDLE_BUY,
        payload: upgrade
    }
}

export const spendPoints = (cost) => {
    return {
        type: SPEND_POINTS,
        payload: cost
    }
}