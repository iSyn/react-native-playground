import {
    GAIN_POINT,
    GAIN_ENERGY
} from '../types'

export const gainPoint = () => {
    return {
        type: GAIN_POINT,
        payload: null
    }
}

export const gainEnergy = () => {
    return {
        type: GAIN_ENERGY,
        payload: null
    }
}