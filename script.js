// text area for planner middle
// save button adds to local Storage
dayjs.extend(window.dayjs_plugin_advancedFormat);

today = $('#currentDay');
today.text(dayjs().format('dddd, MMMM Do'));

// to do

// add color code functionality to text-area

const nowHour = dayjs().format('HH');

$('.textarea').each(function() {
    const textarea = $(this);
    
    const plannerHour = textarea.attr('data-hour');
    
    if (nowHour < plannerHour) {
        textarea.addClass('future');
    } else if (nowHour == plannerHour) {
        textarea.addClass('present');
    } else {
        textarea.addClass('past');
    }
});

//save button commits text-area text to local storage

