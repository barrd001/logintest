auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User logged in ', user);
    } else {
        console.log('User logged out.');
    }

});

const signupForm = document.querySelector('#signup-form');

$('#signup-submit').on('click', function (event) {
    event.preventDefault();

    // Get user info
    const email = $('#signup-email').val();
    const password = $('#signup-pass').val();

    console.log(email);
    console.log(password);

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);

    $('#signup-email').val('');
    $('#signup-pass').val('');
    });

});

// logout
const logout = document.querySelector('#logout');

$(logout).on('click', function(event) {
    event.preventDefault();
    auth.signOut();
    });


// login
const loginForm = document.querySelector('#signin-form');

$('#signin-submit').on('click', function(e) {
    e.preventDefault();

    // get user info
    const email = $('#signin-email').val();
    const password = $('#signin-pass').val();

    // sign in the user
    auth.signInWithEmailAndPassword(email, password).then(cred => {

        $('#signin-email').val('');
        $('#signin-pass').val('');
    });


});