function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return getFirstSelector('#nested .target');
}

function increaseRankBy(n){
    let rankedlists = document.querySelectorAll('.ranked-list li')
    for (let i = 0; i < rankedlists.length; i++) {
        rankedlists[i].innerHTML = parseInt(rankedlists[i].innerHTML)+n;
    }
}

function deepestChild(){
    let node = document.getElementById('grand-node')
    let childNode = node.children[0]
  
    while(childNode){
      node = childNode
      childNode = node.children[0];
    }
    return node;
  }