class button {

  constructor(element, image, message) {
    let button = document.createElement('div');
    button.className = 'button';

    let text = document.createElement('p');
    text.innerHTML = message;

    let img = new Image();
    img.src = image;

    button.appendChild(text);
    button.appendChild(img);

    element.appendChild(button);
  }


}
