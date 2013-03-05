function validateContactForm(){
    var name = document.contactForm.Name;
    var email = document.contactForm.Email;
    var comments = document.contactForm.Comments;

    if (name.value == "")
    {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (comments.value == "")
    {
        window.alert("Please provide a detailed description or comment.");
        name.focus();
        return false;
    }

    return true;
}
