function getRandomIndex(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

function createElement(el, id, classNames, source) {
  let element = document.createElement(el);
  element.id = id;
  for (i = 0; i < classNames.length; i++) {
    element.classList.add(classNames[i]);
  }
  if (source) {
    element.src = source;
  }
  return element;
}
