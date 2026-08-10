def verify_card_number(card_number):
    card_number = card_number.replace(" ", "").replace("-", "")

    if not card_number.isdigit():
        return "INVALID!"

    # Implement Luhn's algorithm
    total = 0
    num_digits = len(card_number)
    parity = num_digits % 2

    for i in range(num_digits):
        digit = int(card_number[i])

        if i % 2 == parity:
            digit *= 2
            if digit > 9:
                digit -= 9

        total += digit

    return "VALID!" if total % 10 == 0 else "INVALID!"
