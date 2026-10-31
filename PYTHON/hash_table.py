class HashTable:
    def __init__(self):
        self.collection = {}

    def hash(self, key: str) -> int:
        return sum(ord(char) for char in key)

    def add(self, key: str, value) -> None:
        hashed_key = self.hash(key)
        if hashed_key in self.collection:
            self.collection[hashed_key].update({key: value})
        else:
            self.collection[hashed_key] = {key: value}

    def remove(self, key: str) -> None:
        hashed_key = self.hash(key)
        if hashed_key in self.collection and key in self.collection[hashed_key]:
            del self.collection[hashed_key][key]
            if not self.collection[hashed_key]:
                del self.collection[hashed_key]

    def lookup(self, key: str):
        hashed_key = self.hash(key)
        if hashed_key in self.collection and key in self.collection[hashed_key]:
            return self.collection[hashed_key][key]
