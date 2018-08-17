import {
    GAIN_POINT,
    GAIN_ENERGY
} from '../types'

const INITIAL_STATE = {
    points: 0,
    pointsPerClick: 1,
    currentEnergy: 100,
    maxEnergy: 100
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GAIN_POINT:
            if (state.currentEnergy > 0) {
                return {
                    ...state,
                    points: state.points += state.pointsPerClick,
                    currentEnergy: state.currentEnergy - 1
                }
            } else {
                return state
            }
        case GAIN_ENERGY:
            if (state.currentEnergy < state.maxEnergy) {
                return {
                    ...state,
                    currentEnergy: state.currentEnergy + 1
                }
            }
        default:
            return state
    }

}