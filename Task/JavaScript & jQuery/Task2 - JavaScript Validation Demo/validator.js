function validatePhoneNumber(cont) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(cont);
}

function validateForm() {
    let fname = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let contact = document.forms["contactForm"]["contact"].value;
    let education = document.forms["contactForm"]["education"].value;
    let address = document.forms["contactForm"]["address"].value;
    let notes = document.forms["contactForm"]["notes"].value;

    if (fname == "") {
        document.getElementById("name").focus();
        document.getElementById("nmErr").innerHTML = "Name must be filled out";
        return false;
    } else {
        document.getElementById("nmErr").innerHTML = "";
        localStorage.setItem('name', fname);
    }

    if (email == "") {
        document.getElementById("emErr").innerHTML = "Email must be filled out";
        document.getElementById("email").focus();
        return false;
    } else {
        document.getElementById("emErr").innerHTML = "";
        localStorage.setItem('email', email);
    }

    if (contact == "") {
        document.getElementById("coErr").innerHTML = "Contact must be filled out";
        document.getElementById("contact").focus();
        return false;
    }
    else if (isNaN(contact)) {
        document.getElementById("coErr").innerHTML = "Contact must be number";
        document.getElementById("contact").focus();
        return false;
    } else {
        if (!validatePhoneNumber(contact)) {
            document.getElementById("coErr").innerHTML = "Contact must be valid contact number";
            document.getElementById("contact").focus();
            return false;
        } else {
            document.getElementById("coErr").innerHTML = "";
            localStorage.setItem('contact', contact);
        }
    } 

    if ($('input:checkbox').filter(':checked').length < 1) {
        document.getElementById("lnErr").innerHTML = "Atleaset one language must be checked";
        document.getElementById("language").focus();
        return false;
    } else {
        document.getElementById("lnErr").innerHTML = "";
        var l = []; 
        var g = document.querySelector('input[name="gender"]:checked').value;
        $('.language').each(function() {
            if($(this).is(':checked')) {
                l.push($(this).attr('value'));
            }
        });
        localStorage.setItem('gender', g);
        localStorage.setItem('language', l);
    }

    if (education == "Select") {
        document.getElementById("edErr").innerHTML = "Education must be selected";
        document.getElementById("education").focus();
        return false;
    } else {
        document.getElementById("edErr").innerHTML = "";
        localStorage.setItem('education', education);
    }

    if (address == "") {
        document.getElementById("adErr").innerHTML = "Address must be filled out";
        document.getElementById("address").focus();
        return false;
    } else {
        document.getElementById("adErr").innerHTML = "";
        localStorage.setItem('address', address);
        localStorage.setItem('notes', notes);
    }
}