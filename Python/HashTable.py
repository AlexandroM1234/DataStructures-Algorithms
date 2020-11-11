class HashTable():
    """
    Time Complexity:
        Insertion: O(1)
        Deletion: O(1)
        Access: O(1)
    """
    def __init__(self,size ):
        self.keyMap = [None] * size

    def hash(self, key):
        """
        Basic Hashing Function 
        """
        # Your code here
        hash = 33
        byte_array = key.encode()
        for b in byte_array:
            hash = ((hash*2)^b) % len(self.keyMap)
        return hash

    def setKeyVal(self, key , val):
        """
        Set a key value pair in the HashTable
        """
        index = self.hash(key)
        if ( self.keyMap[index] == None ):
            self.keyMap[index] = []
        self.keyMap[index].append([key,val])
        return self

    def get(self, key):
        """
        Get a value at a certain key
        """
        index = self.hash(key)
        if (self.keyMap[index]):
            for i in range(len(self.keyMap[index])):
                if (self.keyMap[index][i][0] == key):
                    return self.keyMap[index][i][1]
        return None
    
    def keys(self):
        """
        Return the non duplicate keys of the HashTable
        """
        keys = []
        for i in range(len(self.keyMap)):
            if (self.keyMap[i]):
                for j in range(len(self.keyMap[i])):
                    if (self.keyMap[i][j][0] not in keys):
                        keys.append(self.keyMap[i][j][0])
        return keys


    def values(self):
        """
        Return the non duplicate keys of the HashTable
        """
        values = []
        for i in range(len(self.keyMap)):
            if (self.keyMap[i]):
                for j in range(len(self.keyMap[i])):
                    if (self.keyMap[i][j][1] not in values):
                        values.append(self.keyMap[i][j][1])
        return values

ht = HashTable(8)
ht.setKeyVal("wack","not")
ht.setKeyVal("not","wack")
ht.setKeyVal("rice","bean")
ht.setKeyVal("not","hot")
print(ht.keyMap)
print(ht.get("wack"))
print(ht.keys())
print(ht.values())