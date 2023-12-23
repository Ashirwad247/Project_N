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
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let nameError = '';
    let passwordError = '';
    let name = document.querySelector('.us').value;
    let password = document.querySelector('.ps').value;
    let log = document.querySelector('.log');
    log.style.display = 'flex';

    try {
        const res = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
    
        // if (data.errors) {
        //     nameError = data.errors.name || '';
        //     passwordError = data.errors.password+'Halo Amigos' || '';
        // }
        // // log.innerHTML = nameError || passwordError;
        // console.log(nameError, passwordError)

        if (!data.user) {
            log.innerHTML = data.errors || 'Login unsuccessful';
        } else {
            log.innerHTML = 'Login successful. Redirecting...';
            setTimeout(() => {
                window.location.href = "./user";
            }, 2000);
        }
    } catch (err) {
        console.log(err);
    }
});
