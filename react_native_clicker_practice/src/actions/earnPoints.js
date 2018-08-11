import { GAIN_POINTS } from './types'

export const gainPoints = (amount) => {
    return {
        type: GAIN_POINTS,
        payload: amount++
    }
}