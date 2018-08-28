#Insert a function that prints a greeting, and execute it on the p1 object

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc() 

"""The self parameter is a reference to the class itself, and is used to access variables that belongs to the class.

It does not have to be named self , you can call it whatever you like, but it has to be the first parameter of any function in the class:"""

class Person1:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person1("John", 36)
p1.myfunc() 

#modify properties on objects like this:
p1.age = 40 

#You can delete properties on objects by using the del keyword:

del p1.age

#You can delete objects by using the del keyword:

del p1
