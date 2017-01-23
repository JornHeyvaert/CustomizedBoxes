// some JQuery used to click on the checkboxes

$(document).ready(function() {
    $('.listItem').click(function () {
        var checkBox = $(this).find('input[type="checkbox"]');
        if (checkBox.attr('checked')) {
            checkBox.attr('checked', false);
        }
        else
        {
            checkBox.attr('checked', true);
        }
    });
});
