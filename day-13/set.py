 #A set is a collection which is unordered,changable and unindexed. In Python sets are written with curly brackets.
 
thisset = {"apple", "banana", "cherry"}
print(thisset) 

thisset = set(("apple", "banana", "cherry"))
print(thisset)

thisset.remove("banana")
print(thisset) 

print(len(thisset))