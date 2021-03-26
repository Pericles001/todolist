const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email);
    console.log(password);
    auth.createUserWithEmailAndPassword(email, password).then(() => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();

        signupForm.querySelector('.error').innerHTML = '';
        signupForm.reset();
    }).catch(err => {
        signupForm.querySelector('.error').innerHTML = err.message;
    })
})