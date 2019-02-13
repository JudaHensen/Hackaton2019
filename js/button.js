class Button {
  constructor(element, message, id) {
    let button = document.createElement('div');
    button.className = 'button';
    button.id = id;

    let text = document.createElement('p');
    text.innerHTML = message;
    text.className = 'button_text';

    button.addEventListener('click', ()=>{
      if(button.id == "Restart") restart();
      else update(button.id);
    });

    button.appendChild(text);

    element.appendChild(button);

    let str = '';
    for(let i = 0; i < element.children.length; i++) {
      str += '1fr ';
    }
    element.style.gridTemplateColumns = str;
  }
}
