const emailInput = document.querySelector('#email');
const emailErrorText = document.querySelector('.error-text_email');
const passwordInput = document.querySelector('#password');
const passwordErrorText = document.querySelector('.error-text_password');

const isRequired = value => value
    ? undefined
    : 'Required';

const isEmail = value => value.includes('@')
    ? undefined
    : 'Should be an email';

const validationRules = {
    email: [isRequired, isEmail],
    password: [isRequired]
};

const validate = (name, value) =>
    validationRules[name]
        .map(validationFunc => validationFunc(value))
        .filter(error => error);

const onEmailChanged = e => {
    const errors = validate('email', e.target.value);
    emailErrorText.textContent = errors.join(', ');
};

emailInput.addEventListener('input', onEmailChanged);

const onPasswordChanged = e => {
    const errors = validate('password', e.target.value);
    passwordErrorText.textContent = errors.join(', ');
};

passwordInput.addEventListener('input', onPasswordChanged);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
        .reduce((acc, [prop, value]) => ({ ...acc, [prop]: value }), {});
    alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);