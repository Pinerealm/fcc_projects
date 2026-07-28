class Category:
    def __init__(self, category):
        self.category = category
        self.ledger = []

    def __str__(self):
        out_str = f"{self.category:*^30}"
        for item in self.ledger:
            out_str += f"\n{item['description'][:23]:<23}"
            out_str += f"{item['amount']:>7.2f}"
        out_str += f"\nTotal: {self.get_balance():.2f}"

        return out_str

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        return False

    def get_balance(self):
        return sum(item["amount"] for item in self.ledger)

    def transfer(self, amount, category):
        done = self.withdraw(amount, f"Transfer to {category.category}")
        if done:
            category.deposit(amount, f"Transfer from {self.category}")
        return done

    def check_funds(self, amount):
        all_amounts = (item["amount"] for item in self.ledger)
        return sum(all_amounts) - amount >= 0


def create_spend_chart(categories):
    out_str = "Percentage spent by category"
    withdrawal_dict = {}
    total_withdrawal = 0

    for category in categories:
        withdrawal_amount = sum(
            -item["amount"] for item in category.ledger if item["amount"] < 0
        )
        withdrawal_dict[category.category] = withdrawal_amount
        total_withdrawal += withdrawal_amount

    percentages = {
        category: int((amount / total_withdrawal) * 10) * 10
        for category, amount in withdrawal_dict.items()
    }
    for i in range(100, -1, -10):
        out_str += f"\n{i:>3}|"
        for category in categories:
            if percentages[category.category] >= i:
                out_str += " o "
            else:
                out_str += "   "
        out_str += " "
    out_str += "\n    " + "-" * (len(categories) * 3 + 1)
    max_length = max(len(category.category) for category in categories)

    for i in range(max_length):
        out_str += "\n    "
        for category in categories:
            if i < len(category.category):
                out_str += f" {category.category[i]} "
            else:
                out_str += "   "
        out_str += " "
    return out_str


food = Category("Food")
food.deposit(1000, "deposit")
food.withdraw(10.15, "groceries")
food.withdraw(15.89, "restaurant and more food for dessert")
clothing = Category("Clothing")
food.transfer(50, clothing)
print(food)
print(clothing)

entertainment = Category("Entertainment")
entertainment.deposit(1000, "deposit")
entertainment.withdraw(15, "movie ticket")
entertainment.withdraw(25, "popcorn and soda")

print(create_spend_chart([food, clothing, entertainment]))
