function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget(){
	return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
	let rankedLists = document.querySelectorAll('.ranked-list li')

	for (let i = 0; i < rankedLists.legnth; i++) {
		rankedLists[i].innerHTML = (parseInt(rankedLists[i].HTML + n)).toString()
	}
	
}

function deepestChild() {
	let nodes = document.querySelectorAll('#grand-node div')
	let deepest = nodes[nodes.length-1]
}