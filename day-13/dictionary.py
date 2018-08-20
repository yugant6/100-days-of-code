#A dictionary is a collection which is unordered, changeable and indexed. In Python dictionaries are written with curly brackets, and they have keys and values.

thisdict =	{
  "apple": "green",
  "banana": "yellow",
  "cherry": "red"
}
print(thisdict)

thisdict["apple"] = "red"
print(thisdict)

thisdict = dict(apple="green", banana="yellow", cherry="red")
print(thisdict)

#thisdict = dict(apple: "green", banana: "yellow", cherry: "red")
# double colun : not used in assigning value in dictionary 

# Adding new entry in dictionary

thisdict["damson"] = "purple"
print(thisdict)

del(thisdict["banana"])  # In dictionary del() is used instead of remove()in the given manner
print(thisdict)
