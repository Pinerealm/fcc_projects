def hanoi_solver(num_disks):
    rods = [list(range(num_disks, 0, -1)), [], []]
    states = [" ".join(str(peg) for peg in rods)]

    def move(n, src, aux, dst):
        if n == 0:
            return

        move(n - 1, src, dst, aux)
        disk = rods[src].pop()
        rods[dst].append(disk)
        states.append(" ".join(str(peg) for peg in rods))
        move(n - 1, aux, src, dst)

    move(num_disks, 0, 1, 2)
    return "\n".join(states)
