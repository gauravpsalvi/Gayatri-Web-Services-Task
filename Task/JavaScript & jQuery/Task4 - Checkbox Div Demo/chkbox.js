var flag = false;

function displayCars() {
    var a = []; 

    $('.chkBxCar').each(function() {
        if($(this).is(':checked')) {
            a.push($(this).attr('value'));
        }
    });
    
    $('#resultP').text(a);
}

function displayAllCars() {
    if(flag == false) {
        $('.chkBxCar').each(function() {
            $(this).prop('checked', true);
        });
        flag = true;
    } else if(flag == true) {
        $('.chkBxCar').each(function() {
            $(this).prop('checked', false);
        });
        flag = false;
    }

    displayCars();
}