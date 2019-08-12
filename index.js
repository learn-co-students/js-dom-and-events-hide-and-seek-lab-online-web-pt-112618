function getFirstSelector(selector) {
  return document.querySelector(selector)
};

function nestedTarget() {
  return document.querySelector('div.target')
};

function deepestChild() {
  return document.querySelectorAll('div#grand-node div')[3]
};

function increaseRankBy(n) {
  //that increases the ranks in all of the .ranked-lists by n
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
};
