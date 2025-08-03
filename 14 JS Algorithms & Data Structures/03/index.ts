//^ Dijkstra's Algorithm

type Priority = { val: string; priority: number };

class PriorityQueue {
  values: Priority[];
  constructor() {
    this.values = [];
  }

  enqueue(val: string, priority: number): void {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue(): Priority {
    return this.values.shift() as Priority;
  }

  sort(): void {
    this.values.sort((a: Priority, b: Priority) => a.priority - b.priority);
  }
}

type ADList = { [key: string]: { node: string; weight: number }[] };

class WeightedGraph {
  adjacencyList: ADList;
  constructor() {
    this.adjacencyList = {} as ADList;
  }

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string, weight: number): void {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log("graph.adjacencyList:", graph.adjacencyList);
