class button {

  constructor(element, image, message) {
    let button = document.createElement('div');
    button.className = 'button';

    let text = document.createElement('p');
    text.innerHTML = message;
    text.html = 'button_text';

    let img = new Image();
    img.src = image;
    image.className = 'button_image';

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
