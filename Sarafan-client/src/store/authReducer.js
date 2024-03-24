const defaultState = {
    isAuth: false
}

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const authReducer = (state = defaultState, action) => {
    switch (action.type){
        case LOGIN:
            return {...state, isAuth: true}
        case LOGOUT:
            return {...state, isAuth: false}
        default:
            return state
    }
}

export const login = (payload) => ({type: LOGIN})
export const logout = (payload) => ({type: LOGOUT})

export default authReducer

