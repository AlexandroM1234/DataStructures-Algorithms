class TrieNode:
    """
    Trie node class
    """

    def __init__(self):
        # Every Node has children which is an array size of 26 for the alphabet size
        self.children = [None] * 26
        # as a node is added to a trie if its the end of the word set it to True
        self.isEndOfWord = False


class Trie:
    def __init__(self):
        self.root = self.getNode()

    def getNode(self):
        return TrieNode()

    def charToIndex(self, char):
        return ord(char) - ord("a")

    def insert(self, key):
        # if the key is not in the trie insert it into the trie
        # if the key is a prefix of a trie node
        # just marks leaf node
        pCrawl = self.root
        length = len(key)
        for level in range(length):
            index = self.charToIndex(key[level])
            # if current character is not in trie
            if not pCrawl.children[index]:
                pCrawl.children[index] = self.getNode()
            pCrawl = pCrawl.children[index]
        # marks the last node as a leaf
        pCrawl.isEndOfWord = True

    def search(self, key):
        # search key in the trie
        # returns true if key present
        # in trie else false
        pCrawl = self.root
        length = len(key)
        for level in range(length):
            index = self.charToIndex(key[level])
            if not pCrawl.children[index]:
                return False
            pCrawl = pCrawl.children[index]
        return pCrawl != None and pCrawl.isEndOfWord


def main():

    # Input keys (use only 'a' through 'z' and lower case)
    keys = ["the", "a", "there", "anaswe", "any", "by", "their"]
    output = ["Not present in trie", "Present in trie"]

    # Trie object
    t = Trie()

    # Construct trie
    for key in keys:
        t.insert(key)

    # Search for different keys
    print("{} ---- {}".format("the", output[t.search("the")]))
    print("{} ---- {}".format("these", output[t.search("these")]))
    print("{} ---- {}".format("their", output[t.search("their")]))
    print("{} ---- {}".format("thaw", output[t.search("thaw")]))


if __name__ == "__main__":
    main()
