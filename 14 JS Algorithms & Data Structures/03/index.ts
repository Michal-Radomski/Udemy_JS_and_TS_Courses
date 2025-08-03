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

  Dijkstra(start: string, finish: string): string[] {
    const nodes = new PriorityQueue();
    const distances = {} as { [key: string]: number };
    const previous = {} as { [key: string]: string | null };
    let path = [] as string[]; // to return at end
    let smallest;

    // Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val as string;
      if (smallest === finish) {
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while (previous[smallest as string]) {
          path.push(smallest as string);
          smallest = previous[smallest as string] as string;
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // Find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];

          // Calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // Updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // Updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // Enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest as string).reverse();
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

console.log('graph.Dijkstra("A", "E"):', graph.Dijkstra("A", "E")); //* [ 'A', 'C', 'D', 'F', 'E' ]
