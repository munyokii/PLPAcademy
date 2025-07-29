from collections import deque


# Sample graph represented as an adjacency list

graph = {

'A': ['B', 'C'],

'B': ['A', 'D', 'E'],

'C': ['A', 'F'],

'D': ['B'],

'E': ['B', 'F'],

'F': ['C', 'E']

}



# DFS using recursion

def dfs(graph, start, visited=None):

    if visited is None:
        visited = set()

        visited.add(start)

    print(start, end=" ")

    for neighbor in graph[start]:

        if neighbor not in visited:

            dfs(graph, neighbor, visited)

    return visited


print("DFS Traversal starting from A:")

dfs(graph, 'A')

print("\n")



# BFS using a queue

def bfs(graph, start):

    visited = set()

    queue = deque([start])

    while queue:

        vertex = queue.popleft()

        if vertex not in visited:

            visited.add(vertex)

            print(vertex, end=" ")

        queue.extend([n for n in graph[vertex] if n not in visited])

        print()

print("BFS Traversal starting from A:")

bfs(graph, 'A')
