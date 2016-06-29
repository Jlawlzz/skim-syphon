$(document).ready(function(){

  $('.sign-up').on('click', function(){
    var username = $('#signUpUsername').val()
    var password = $('#signUpPassword').val()
    var passwordConfirmation = $('#signUpPasswordConfirmation').val()

    $.ajax({
      url: "/signup",
      type: "POST",
      data: { user: { username: username,
                      password: password,
                      passwordConfirmation: passwordConfirmation
                    }
            }
    });
  });

});
