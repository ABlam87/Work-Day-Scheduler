dayjs.extend(window.dayjs_plugin_advancedFormat);

today = $('#currentDay');
plannerText =$('.textarea');
save = $('.saveBtn');
planner = $('#container')
validBox = $('#validBox')

// Day tracker

today.text(dayjs().format('dddd, MMMM Do'));

// add color code & local storage functionality to text-area

const nowHour = dayjs().format('HH');

$(plannerText).each(function() {
    const textarea = $(this);
    
    const plannerHour = textarea.attr('data-hour');
    textarea.text(localStorage.getItem(plannerHour));
    
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

    showValidation();
})

// validation message

function showValidation() {
    validBox.text('Your entry has been saved!');
    setTimeout(function() {
        clearInterval;
        validBox.text('')
    }, 3000)
}