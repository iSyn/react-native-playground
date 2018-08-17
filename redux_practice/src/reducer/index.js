let initialState = {
    name: "Synclair",
    inputValue: ""
}

export function nameReducer(state = initialState, action) {

    switch (action.type) {
        case 'changeName':
            return { ...state, name: action.payload, inputValue: '' }
        case 'inputChange':
            return { ...state, inputValue: action.payload }
        default:
            return state
    }
}