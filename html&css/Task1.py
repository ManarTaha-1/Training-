# Exercise 1
numbers = [10, 25, 5, 40, 15]
total_sum = sum(numbers)
print("Sum of all elements:", total_sum)
numbers.remove(max(numbers))
numbers.remove(min(numbers))
print("List after removing largest and smallest:", numbers)
numbers.sort()
print("Sorted list:", numbers)
# Exercise 2
book = {
    "Title": "Programming Languages",
    "Author": "John",
    "Year": 2003,
    "Price": 100.99
}
book["Price"] = 120.99
print("Updated book price:", book["Price"])
book["publisher"] = "Scribner"
print("Updated book dictionary:", book)
print("Book details:")
for key, value in book.items():
    print(f"{key}: {value}")
# Exercise 3
colors = ("red", "blue", "green", "yellow", "blue")
index_of_blue = colors.index("blue")
print("Index of blue:", index_of_blue)
count_of_blue = colors.count("blue")
print("Count of blue:", count_of_blue)

