//^ Graph
class Graph {
  adjacencyList: { [key: string]: string[] };

  constructor() {
    this.adjacencyList = {} as { [key: string]: string[] };
  }

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1: string, v2: string): void {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v: string) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v: string) => v !== vertex1);
  }

  removeVertex(vertex: string): void {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop() as string;
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start: string): string[] {
    const result = [] as string[];
    const visited = {} as { [key: string]: boolean };
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex: string) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor: string) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  //* Graph Traversal
  depthFirstIterative(start: string): string[] {
    const stack = [start];
    const result = [] as string[];
    const visited = {} as { [key: string]: boolean };
    let currentVertex: string;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop() as string;
      result.push(currentVertex as string);

      this.adjacencyList[currentVertex as string].forEach((neighbor: string) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirst(start: string): string[] {
    const queue = [start];
    const result = [] as string[];
    const visited = {} as { [key: string]: boolean };
    let currentVertex: string;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift() as string;
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor: string) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong");
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Hong Kong", "Tokyo");
graph.addEdge("Hong Kong", "Dallas");
graph.addEdge("Los Angeles", "Hong Kong");
graph.addEdge("Los Angeles", "Aspen");
console.log("graph:", graph);

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

const graph2 = new Graph();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addVertex("F");
graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("B", "D");
graph2.addEdge("C", "E");
graph2.addEdge("D", "E");
graph2.addEdge("D", "F");
graph2.addEdge("E", "F");
console.log('graph2.depthFirstRecursive("A"):', graph2.depthFirstRecursive("A"));
console.log('graph2.depthFirstIterative("A"):', graph2.depthFirstIterative("A"));
console.log('graph2.breadthFirst("A"):', graph2.breadthFirst("A"));
