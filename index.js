function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}


function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li');
   for ( let i = 0; i < ranks.length; i++ ) {
     ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
   }
}

// function deepestChild() {
//   let grandNode = document.querySelector('#grand-node');
//   let deepestNode = grandNode.children[0];
//   for (let i = 0; !deepestNode.children[i]; i) {
//     deepestNode = deepestNode.children[0]
//   }
//   return deepestNode;
// }

function deepestChild() {
  let node = document.getElementById( 'grand-node' )
  let nextNode = node.children[ 0 ]

  while ( nextNode ) {
    node = nextNode
    nextNode = node.children[ 0 ]
  }

  return node
}
