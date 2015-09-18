
function validate() {
    var x = document.forms["buyer_form"]["fname"].value;
    if (x == null || x == "") {
        alert("Please fill FirstName");
        document.forms["buyer_form"]["fname"].focus();
        return false;
    }
    var x = document.forms["buyer_form"]["lname"].value;
    if (x == null || x == "") {
        alert("Please fill LastName");
        return false;
    }
    var x = document.forms["buyer_form"]["id_no"].value;
    if (x == null || x == "") {
        alert("Please enter valid ID number");
        return false;
    }
    var x = document.forms["buyer_form"]["bemail"].value;
    if (x == null || x == "") {
        alert("Enter correct email format");
        return false;
    }
    var x = document.forms["buyer_form"]["selectbasic"].value;
    if (x == null || x == "") {
        alert("Select your county");
        return false;
    }
}
