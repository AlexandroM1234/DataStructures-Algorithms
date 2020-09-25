#Write a function called SameFrequency. Given 2 positive integers, find out if teh 2 numbers have the same frequnecy of digits
#Must be in 0(N) time complexity

def SameFrequency(num1,num2):
    string1 = str(num1)
    string2 = str(num2)

    total1 = 0
    total2 = 0
    for nums in string1:
        total1 += int(nums)
    for nums in string2:
        total2 += int(nums)
    if total1 == total2:
        return True
    return False

print(SameFrequency(182,281))

print(SameFrequency(34,14))

print(SameFrequency(22,222))

print(SameFrequency(3589578,5879385))