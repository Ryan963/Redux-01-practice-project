import * as actionTypes from '../actions'
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.INCREMENT:
            return {...state,
                counter: state.counter + 1
            }
        
        case actionTypes.DECREMENT:
            return {...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {...state,
                counter: state.counter + action.number
            }
        
        case actionTypes.SUBTRACT:
            return {...state,
                counter: state.counter - action.number
            }
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({id: new Date(),value:action.result})
            }
        case actionTypes.DELETE_RESULTS:
            const updatedArray = state.results.filter(res => res.id !== action.id)
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state
    }
};

export default reducer;