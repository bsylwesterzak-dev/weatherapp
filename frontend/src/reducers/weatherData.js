
let weatherData = {
    data: {
        day: null,
        month: null,
        city: null,
        temp: null,
        feels_like: null,
        rain: null,
        wind: null,
        humidity: null,
        pressure: null,
        main: null
    },
    week: null,
    hours: null,
    alert: null,
    widgets: [
        
    ]
}

const weatherDataReducer = (state = weatherData, action) => {
    switch(action.type){
        case 'GET_CURRENT_WEATHER':
            return {...state, data: action.payload }
        case 'GET_WEEK_WEATHER':
            return {...state, week: action.payload}    
        case 'GET_HOURS_WEATHER':
            return {...state, hours: action.payload}
        case 'SET_ALERT_DATA':
            return {...state, alert: action.payload}   
        case 'SET_WIDGET_DATA':
            return {...state, widgets: Array.isArray(action.payload) ? action.payload : [...state.widgets, action.payload]}  
        case 'DELETE_WIDGET':
            return {...state, widgets: state.widgets.filter(widget => {
                return widget.city !== action.payload
            })}       
        default: 
            return state;    
    }
}

export default weatherDataReducer;