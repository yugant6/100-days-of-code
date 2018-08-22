def my_function():
  print("Hello from a function") 

my_function()

def my_function2(fname):
  print(fname + " Refsnes")

my_function2("Emil")
my_function2("Tobias")
my_function2("Linus") 

def my_function3(country = "Norway"):
  print("I am from " + country)

my_function3("Sweden")
my_function3("India")
my_function3()
my_function3("Brazil") 

def my_function4(x):
  return 5 * x

print(my_function4(3))
