import {Types} from '../actions/users'

const INITIAL_STATE = {
    items: []
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case Types.GET_USERS_SUCCESS :
            return {
                items: action.payload.items
            }
        default:
            return state
    }
}