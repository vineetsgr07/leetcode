/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */

const setHoursMinutes = (time) =>{
    const [hours, minutes] = time.split(":")
    const now = new Date()

    now.setHours(hours, minutes, 0 ,0)
    return now
}

var haveConflict = function(event1, event2) {
    let splitedEvent11 = setHoursMinutes(event1[0])
    let splitedEvent12 = setHoursMinutes(event1[1])

    let splitedEvent21 = setHoursMinutes(event2[0])
    let splitedEvent22 = setHoursMinutes(event2[1])

    if(
        splitedEvent11 <= splitedEvent21 && splitedEvent21 <= splitedEvent12 || 
        splitedEvent11 <= splitedEvent22 && splitedEvent22 <= splitedEvent12 || 
        splitedEvent21 <= splitedEvent11 && splitedEvent12<=splitedEvent22 
    ) return true

    return false
};