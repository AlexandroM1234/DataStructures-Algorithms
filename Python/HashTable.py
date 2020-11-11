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
        # set the index for the key by hashing it 
        index = self.hash(key)
        # if there is nothing at that index initialize an empty list
        if ( self.keyMap[index] == None ):
            self.keyMap[index] = []
        # in all cases at that index appended another list with the key value pair
        self.keyMap[index].append([key,val])
        return self

    def get(self, key):
        """
        Get a value at a certain key
        """
        # get the index
        index = self.hash(key)
        # if the index is valid
        if (self.keyMap[index]):
            # loop through the list at that index
            for i in range(len(self.keyMap[index])):
                # if the sub array's value at the 0th index is equal key
                if (self.keyMap[index][i][0] == key):
                    # return the item at the 1st index which is equal to the value
                    return self.keyMap[index][i][1]
        return None
    
    def keys(self):
        """
        Return the non duplicate keys of the HashTable
        """
        keys = []
        # loop through the keyMap
        for i in range(len(self.keyMap)):
            # if there is a non None value at that index
            if (self.keyMap[i]):
                # Loop through the sub array in that array
                for j in range(len(self.keyMap[i])):
                    # Check for non duplicte keys
                    if (self.keyMap[i][j][0] not in keys):
                        # then append the value of the sub array at the 0th index
                        keys.append(self.keyMap[i][j][0])
        return keys


    def values(self):
        """
        Return the non duplicate keys of the HashTable.

        All the logic is the same as keys except we return the value at the 1st index.
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