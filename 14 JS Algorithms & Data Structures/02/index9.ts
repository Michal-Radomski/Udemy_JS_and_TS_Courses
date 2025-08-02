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
