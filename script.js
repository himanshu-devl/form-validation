
$(document).ready(function() {
   $('#formv').validate({
      rules:{
         fname: "required",
         lname: "required",
         email: {
            required: true,
            email: true
         },
         phone_number: {
            required: true,
            minlength: 10,
            maxlength: 10,
            digits: true
         },
         password: {
            required: true,
            minlength: 8,
            passwordComplexity: true
         }
      },
      messages: {
         fname: "Please enter your First name",
         lname: "Please enter your Last name",
         email: {
            required: "Please enter email",
            email: "Please enter a valid email"
         },
         phone_number: {
            required: "Please enter phone number",
            minlength: "Phone number must be 10 digits long",
            maxlength: "Phone number must be 10 digits long",
            digits: "Please enter a valid phone number"
         },
         password: {
            required: "Please enter your password",
            minlength: "Password must be at least 8 characters long",
            passwordComplexity: "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
         }
      },
      errorPlacement: function(error, element) {
         if (element.attr("name") === "phone_number") {
            error.appendTo("#phone_numberError");
         } else {
            error.insertAfter(element);
         }
      },
      highlight: function(element) {
         $(element).css("border-color", "red");
      },
      unhighlight: function(element) {
         $(element).css("border-color", "dodgerblue");
      },
      submitHandler: function(form) {
         $.ajax({
            url: "submit.php",
            type: "POST",
            data: $(form).serialize(),
            success: function(response) {
               console.log(response);
               // Display success message or perform any other actions
            },
            error: function(xhr, status, error) {
               console.error(xhr.responseText);
               // Display error message or perform any other actions
            }
         });
      }
   });

   $.validator.addMethod('passwordComplexity', function(value, element) {
    return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
}, 'Password must contain at least one uppercase letter, one lowercase letter, and one special character');

});

