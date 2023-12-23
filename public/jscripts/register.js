const lform = document.querySelector('.lform');

function onloadd() {
    if (lform.classList.contains('hidden')) {
        setTimeout(() => {
            lform.classList.remove('hidden');
        }, 2000);

        lform.classList.add('show');
    }
}

const form = document.querySelector('form');
let log = document.querySelector('.log');// Updated form submit event handling
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.name.value;
    const password = form.password.value;
    log.style.display = 'flex';

    try {
        const res = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        console.log(data, 'After fetching...');

        if (data.errors) {
            let errorMessage = '';

            if (data.errors.name) {
                errorMessage += data.errors.name + '<br>';
            }

            if (data.errors.password) {
                errorMessage += data.errors.password;
            }

            log.innerHTML = errorMessage || 'Login unsuccessful';
        }

        if (data.user) {
            log.innerHTML = 'User Creation successful. Redirecting...';
            setTimeout(() => {
                location.assign('/user');
            }, 2000);
        }
    } catch (err) {
        console.log(err);
    }
});
