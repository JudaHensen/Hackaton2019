class Button {

  constructor(element, image, message, id) {
    let button = document.createElement('div');
    button.className = 'button';
    button.id = id;

    let text = document.createElement('p');
    text.innerHTML = message;
    text.html = 'button_text';

    let img = new Image();
    img.src = image;
    image.className = 'button_image';

    button.addEventListener('click', ()=>{
      if(button.id == "Restart") restart();
      else update(button.id);
    });

    button.appendChild(text);
    button.appendChild(img);

    element.appendChild(button);

    let str = '';
    for(let i = 0; i < element.children.length; i++) {
      str += '1fr ';
    }
    element.style.gridTemplateColumns = str;
  }


}
