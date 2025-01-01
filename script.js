const btn = document.querySelector('#btn')
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

btn.addEventListener('click', ()=>{
    const dob = document.getElementById('input').value;

    if(!dob){
        alert('Enter your Birthday');
        return;
    }

    let today = new Date();
    let birthday = new Date(dob);
    let year = today.getFullYear() - birthday.getFullYear();
    let month = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();
    
    first.innerText = `${year}`
    second.innerText = `${month}`
    third.innerText = `${days}`
 });