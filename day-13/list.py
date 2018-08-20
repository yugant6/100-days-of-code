#List is a collection which is ordered and changeable. Allows duplicate members.

thisList = ["apple", "banana", "cherry"]
print(thisList)

thisList[1] = "blackcurrant"
print(thisList)

newList = list(("John", "Yugant", "Shubham")) # note the double round-brackets
print(thisList)

thisList.remove("blackcurrant")
print(thisList)

print(len(thisList))

thisList.pop(1)
print(thisList)

newList.insert(2,"tayal")
print(newList)

