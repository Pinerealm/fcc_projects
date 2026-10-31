def dfs(matrix, node_label):
    visited = set()
    stack = [node_label]
    result = []

    while stack:
        node = stack.pop()
        if node not in visited:
            result.append(node)
            visited.add(node)

            # Add neighbors to the stack
            for neighbor in range(len(matrix[node])):
                if matrix[node][neighbor] == 1 and neighbor not in visited:
                    stack.append(neighbor)

    return result


# Example usage:
if __name__ == "__main__":
    print("Depth-First Search starting from node 1:")
    dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1)
