class GraphPractice {
  constructor() {}

  depthFirstPrint(graph, source) {
    const stack = [source];

    while (stack.length > 0) {
      const current = stack.pop();
      console.log(current);

      for (let neighbor of graph[current]) {
        stack.push(neighbor);
      }
    }
  }

  breadthFirstPrint(graph, source) {
    console.log("Executing method getBreadthFirst");
  }
}

const graphPractice = new GraphPractice();

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

graphPractice.depthFirstPrint(graph, "a");
