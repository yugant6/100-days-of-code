fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)

fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    break
  print(x)

fruits = ["apple", "banana", "cherry"]
for x in fruits:
  if x == "banana":
    continue
  print(x)

for x in range(3) :
  print(x)

for x in range(2, 6):
  print(x)

#The range() function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter:

for x in range(2, 30, 3):
  print(x)


  # Recursion

def recursion(k):
   if k>0:
     result = k + recursion(k-1)
     print(k)
     print(recursion(k-1))
     print(result)
   else:
     result=0
   return result

print("Recursion")
recursion(2)
       
