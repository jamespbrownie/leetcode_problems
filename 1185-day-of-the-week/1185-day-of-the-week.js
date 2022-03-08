/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    
    //given TODAY (tues, march 8th 2022, 2022/3/8) compute the day of the week of  date? 
    
    //object(dictionary) to help calculate number of days: 

    const days = {
       0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"
    }
    
    return days[new Date(`${month}, ${day}, ${year}`).getDay()]
    
    
    
};