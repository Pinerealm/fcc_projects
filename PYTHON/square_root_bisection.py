def square_root_bisection(number, tolerance=1e-2, max_iterations=1000):
    if number < 0:
        raise ValueError(
            "Square root of negative number is not defined in real numbers"
        )
    if number in (0, 1):
        print(f"The square root of {number} is {number}")
        return number

    low = 0.0
    high = max(1.0, number)
    iterations = 0

    while (high - low) / 2.0 > tolerance and iterations < max_iterations:
        guess = (low + high) / 2.0
        if guess**2 < number:
            low = guess
        else:
            high = guess
        iterations += 1

    if iterations == max_iterations:
        print(f"Failed to converge within {max_iterations} iterations")
        return None

    guess = (low + high) / 2.0
    print(f"The square root of {number} is approximately {guess}")
    return guess


if __name__ == "__main__":
    try:
        square_root_bisection(0.001, 1e-7, 50)
    except ValueError as e:
        print(e)
