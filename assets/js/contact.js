var $form = $("form"),
    $successMsg = $(".uk-alert");
$.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$form.validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            letters: true
        },
        email: {
            required: true,
            email: true
        },
        subject: {
            required: true,
            minlength: 4,
            letters: true
        },
        message: {
            required: true,
            minlength: 3,
            letters: true
        },
    },
    messages: {
        name: "Please specify your name (only letters and spaces are allowed)",
        email: "Please give a valid email address",
        subject: "Please enter the subject of the message!",
        message: "Please fill me!"
    },
    submitHandler: function() {
        $successMsg.show();

    }

});