class Node:
    def __init__(self):
        self.children = {}
        self.endOfWord = False


class Trie:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        # Trie intializes with a Node
        self.root = Node()

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        # have a pointer to the root
        cur = self.root
        # for every letter in the word
        for letter in word:
            # if its not in the the roots children
            if letter not in cur.children:
                # have a the letter be the key and the node be the value
                cur.children[letter] = Node()
            # then curent points to the child's letter
            cur = cur.children[letter]
        # after all of the letters set end of word to true
        cur.endOfWord = True

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        # have a pointer to the root
        cur = self.root
        # for every letter in the word
        for letter in word:
            # if the letter is not in the cur.children then it doesnt exist so return False
            if letter not in cur.children:
                return False
            # then continue to point to the next child's letters
            cur = cur.children[letter]
        # then if the the end of word is true or false return it
        return cur.endOfWord

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        cur = self.root
        # for every letter in the prefix
        for letter in prefix:
            # if its not in the children return False
            if letter not in cur.children:
                return False
            cur = cur.children[letter]
        # otherwise it exists so return true
        return True
