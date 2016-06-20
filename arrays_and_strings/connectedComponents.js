function connectedComponents (adjList) {
	var graph = {};
	adjList.forEach(function (arr) {
		var x = arr[0];
		var y = arr[1];

		graph[x] ? graph[x].push(y) : graph[x] = [y];
		graph[y] ? graph[y].push(x) : graph[y] = [x];
	});

	var toVisit = Object.keys(graph);
	var components = [];
	var visited = {};
	while (toVisit.length > 0) {
		var queue = [toVisit.shift()];
		var comp = [];

		while (queue.length > 0) {
			var key = queue.shift();
			if (visited[key]) {
				continue;
			}
			visited[key] = true;
			comp.push(parseInt(key));
			queue = queue.concat(graph[key]);
		}
		if (comp.length > 0) {
			components.push(comp);
		}
	}
	return components;
}

var adjList = [[1, 2], [3, 4], [5, 6], [6, 3]];

console.log(connectedComponents(adjList));