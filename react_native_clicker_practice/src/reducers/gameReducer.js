import { 
    GAIN_POINTS
} from '../actions/types'

const INITIAL_STATE = { 
    points: 0,
    pointsPerClick: 1,
    upgrades: [
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

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GAIN_POINTS:
            return state
        // case EMAIL_CHANGED:
        //     return { ...state, email: action.payload }
        // case PASSWORD_CHANGED:
        //     return { ...state, password: action.payload }
        // case LOGIN_USER_START:
        //     return { ...state, loading: true, error: '' }
        // case LOGIN_USER_SUCCESS:
        //     return {  ...state, ...INITIAL_STATE, user: action.payload }
        // case LOGIN_USER_FAIL:
        //     return { ...state, error: 'Authentication Failed :(', password: '', loading: false } 
        default:
            return state
    }
}