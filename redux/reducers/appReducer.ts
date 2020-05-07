interface IntialState {
    values: Array<any>
}

const intialState: IntialState = {
    values: []
}


export const appReducer = (state: IntialState = intialState, action: any): IntialState => {
    switch (action.type) {
        case '': {
            return state;
        }
        default:
            return state;
    }
}
