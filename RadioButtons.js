// some JQuery used to click on the radiobutton

$(document).ready(function(){
    $('.listItem').click(function () {
        var radioBtn = $(this).find('input[type="radio"]');
        radioBtn.prop('checked', !radioBtn.prop('checked'));
        radioBtn.prop('checked', true);
    });
});
