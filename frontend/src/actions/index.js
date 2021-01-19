export const GET_CURRENT_WEATHER = (n) => {
    return {
        type: 'GET_CURRENT_WEATHER',
        payload: n
    }
}
export const GET_WEEK_WEATHER = (n) => {
    return {
        type: 'GET_WEEK_WEATHER',
        payload: n
    }
}
export const GET_HOURS_WEATHER = (n) => {
    return {
        type: 'GET_HOURS_WEATHER',
        payload: n
    }
}

export const SET_SIDEBAR_STATE = (bool) => {
    return {
        type: 'SET_SIDEBAR_STATE',
        payload: bool
    }
}

export const CHANGE_OPTIONTIME = (time) => {
    return {
        type: 'CHANGE_OPTIONTIME',
        payload: time
    }
}

export const SET_ALERT_DATA = (alert) => {
    return {
        type: 'SET_ALERT_DATA',
        payload: alert
    }
}

export const SET_ALERT_STATE = () => {
    return {
        type: 'SET_ALERT_STATE'
    }
}

export const SET_WIDGET_STATE = (bool) => {
    return {
        type: 'SET_WIDGET_STATE',
        payload: bool
    }
}

export const SET_WIDGET_DATA = (city) => {
    return {
        type: 'SET_WIDGET_DATA',
        payload: city
    }
}

export const DELETE_WIDGET = (city) => {
    return {
        type: 'DELETE_WIDGET',
        payload: city
    }
}

export const SET_GUEST_STATE = (bool) => {
    return {
        type: 'SET_GUEST_STATE',
        payload: bool
    }
}
