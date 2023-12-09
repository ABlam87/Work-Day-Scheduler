// text area for planner middle
// save button adds to local Storage
dayjs.extend(window.dayjs_plugin_advancedFormat);

today = $('#currentDay');
plannerText =$('.textarea');
today.text(dayjs().format('dddd, MMMM Do'));
save = $('.saveBtn');
planner = $('#container')
let txt;

// to do

// add color code functionality to text-area

const nowHour = dayjs().format('HH');

$(plannerText).each(function() {
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

$(planner).on('click', '.saveBtn', function(event) {
    event.preventDefault();

    let row = $(this).parent();
    textbox = row.children('.textarea');
    hour = textbox.attr('data-hour');
    plannerInput = textbox.val();
    localStorage.setItem(hour, plannerInput);
    savedText = localStorage.getItem('content');
    textbox.attr('value', savedText);
})
