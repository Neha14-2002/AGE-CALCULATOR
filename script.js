const btn = document.getElementById('btn');
const age = document.getElementById('age');

btn.addEventListener('click', ()=>{
    let birthdate = document.querySelector('#birthdate').value;

    if(!birthdate){
        alert('Enter your Birthdate');
        return
    }

    let today = new Date();
    let birthday = new Date(birthdate);
    let year =  today.getFullYear() - birthday.getFullYear();

    age.innerText = `You are ${year} years old`;
});