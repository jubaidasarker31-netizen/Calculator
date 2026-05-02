const btn = document. getElementById('clickBtn');
const message = document.getElementById('message');
 

btn.addEventListener('click', function(){
    message.innerText = 'Button clicked';
    message.style.color = red;
})

const hover = document.getElementById('hoverBox');

hover.addEventListener('mouseover', function(){
  hover.textContent= 'Hovered!';
   hover.style.backgroundColor='green';
})
hover.addEventListener('mouseout', function(){
    hover.textContent= 'Hover Me';
    hover.style.backgroundColor= 'lightgray';
})

const input = document.getElementById('nameInput');
const output = document.getElementById('nameOutput');
 
input.addEventListener=('input', function(){
    //output.textContent= input.value;
  const typedText= event.target.value;
  output.textContent= typedText;


})
