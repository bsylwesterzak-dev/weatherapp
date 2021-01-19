export const dtToDate = (dt) => {
    const date = new Date(dt * 1000)
    const weekday = ["Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
 "Friday",
"Saturday",]

    return {
       weekday: weekday[date.getDay()],
       hour: date.getHours() + ':00'
    }
}