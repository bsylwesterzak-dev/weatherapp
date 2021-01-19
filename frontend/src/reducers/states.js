
let appStates = {
    isSidebar: null,
    optionTime: null,
    isAlert: false,
    isWidget: null,
    isGuest: false,
}


const appStatesReducer = (state = appStates, action) => {
    switch(action.type){
           case 'SET_SIDEBAR_STATE':
               return {...state, isSidebar: action.payload}
            case 'CHANGE_OPTIONTIME':
                return {...state, optionTime: action.payload}  
            case 'SET_ALERT_STATE':
                return {...state, isAlert: !state.isAlert}   
            case 'SET_WIDGET_STATE':
                return {...state, isWidget: action.payload}
            case 'SET_GUEST_STATE':
                return {...state, isGuest: action.payload}    
            default:
                return state;
    }
}

export default appStatesReducer;