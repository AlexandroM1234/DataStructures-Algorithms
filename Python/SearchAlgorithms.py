def linearSearch(arr, val):
    for i in range(len(arr)):
        if arr[i] == val:
            return i
    return -1


def binarySearch(arr, val):
    """
    array values must be sorted
    """
    left = 0
    right = len(arr) - 1
    half = (left + right) // 2
    while arr[half] != val:
        if val < arr[half]:
            right = half - 1
        else:
            left = half + 1
        half = (left + right) // 2
    if arr[half] == val:
        return half
    return -1


print(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 100))
print(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 9))
