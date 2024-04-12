export const callbackPrompt = {
    message: 'Enter your number and we will call you back',
    showPrompt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    }
};