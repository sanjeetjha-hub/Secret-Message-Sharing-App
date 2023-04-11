const { hash } = window.location;

console.log(hash);
const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const messageform = document.querySelector('#message-form');
    messageform.classList.add('hide');
    const linkform = document.querySelector('#link-form');
    linkform.classList.remove('hide');


    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const link = document.querySelector('#link-input');
    link.value = `${window.location}#${encrypted}`;
    link.select();

})