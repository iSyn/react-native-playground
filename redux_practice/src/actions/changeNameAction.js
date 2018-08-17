export const changeNameAction = (newName) => {
    return {
        type: 'changeName',
        payload: newName
    }
}

export const handleInputChange = (text) => {
    console.log('handleInputChange action firing', text)
    return {
        type: 'inputChange',
        payload: text
    }
}