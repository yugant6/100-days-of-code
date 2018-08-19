x = 3
y = 7

if(x < 4 and y > 5):
  print(" if both Condition is true,returns true")

if(x < 4 or y > 7):
  print("if one Condition is true,returns true")

if(not(x < 4 and y > 7)):
  print("if both condition is true, return false")

if(not(x > 4 or y > 7)):
  print("if both Condition is false,returns true")

# In js we use === for compare the objects , in pyhthon we use 'is' keyword

x = ["apple", "banana"]
y = ["apple", "banana"]
z = x

print(x is z)

# returns True because z is the same object as x

print(x is not z)

# returns false because z is the same object as x but we use is not keyword

print(x is y)

# returns False because x is not the same object as y, even if they have thew same content

print(x == y)

# to demonstrate the difference betweeen "is" and "==": this comparison returns True because x is equal to y

print("banana" in x)

# Returns True if a sequence with the specific value is present in the object

print("banana" not in x)

# Returns false if a sequence with the specific value is present in the object

