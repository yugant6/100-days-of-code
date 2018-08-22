

#Use lambda functions when an anonymous function is required for a short period of time.

#A lambda function can take any number of arguments, but can only have one expression.

x = lambda a : a + 10
print(x(5)) 

x = lambda a, b : a * b
print(x(5, 6)) 

def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(11))
print(mytripler(11))
