function dijkstra(graph, startNode) {
    // Initialize distances to all nodes as infinity, except the startNode as 0
    const distances = {};
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    // Create a priority queue to track nodes with their distances
    const priorityQueue = [startNode];

    while (priorityQueue.length) {
        const currentNode = priorityQueue.shift();

        // Explore neighbors of the current node
        for (const neighbor in graph[currentNode]) {
            const distance = distances[currentNode] + graph[currentNode][neighbor];

            // If the new distance is shorter, update it
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                priorityQueue.push(neighbor);
            }
        }
    }

    return distances;
}

// Example usage
const graph = {
    A: { B: 2, D: 1 },
    B: { A: 2, C: 3 },
    C: { B: 3, D: 4 },
    D: { A: 1, C: 4 },
};

const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances);