document.addEventListener('DOMContentLoaded', () => {
    head = document.createElement('h1');
    head.innerHTML = "Hello";
    document.querySelector('body').prepend(head);
})