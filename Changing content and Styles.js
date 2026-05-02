const title = document.getElementById('cardTitle');
const text = document.getElementById('cardText');
const link = document.getElementById('myLink');

title.textContent = ' Hellow ! This is my new Title';

text.innerHTML = 'I have been <strong> changed </strong> by Js! </br>I now have bold text ';

link.href = 'https://www.google.com';
link.innerText = 'Google';
link.target ='-blank';
