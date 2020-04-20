
fruits = ["apple", "banana", "blueberry", "plum", "pear", "cherry"]


def begins_with_p(fruits)
    # return all fruits that start with p
    fruits.select do |fruit|
        fruit.start_with?("p")
    end

end

def short_fruits(fruits)
    # return all fruits that are five or fewer letters longer
    fruits.select do |fruit|
        fruit.length <= 5
    end 
end

def i_love_fruit(fruits)
    # return an array of strings that say "I love {fruit name}" 
    # for every fruit in the array
    fruits.map do |fruit|
        "I love #{fruit}"
    end


end

# print i_love_fruit(fruits)
# Bonus
# write a method that returns all fruits that start with a given letter

def fruits_that_start_with(letter, arr)
    arr.select do |fruit|
        fruit.start_with?(letter)
    end
end

print fruits_that_start_with("b", fruits)