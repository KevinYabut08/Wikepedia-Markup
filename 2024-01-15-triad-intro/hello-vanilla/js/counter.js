function setupCounter(element) {
  let counter = 50;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  }
  element.addEventListener('click', () => setCounter(counter + 50))
  setCounter(0)
}

setupCounter(document.querySelector('#counter'));