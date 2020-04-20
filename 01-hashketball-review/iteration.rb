instructors = [
    {name: "Paul", role: "lead"},
    {name: "Shannon", role: "coach"},
    {name: "Chine", role: "coach"},
    {name: "Yoan", role: "coach"}
]


# each
# does the same thing for every item in the array
# instructors.each do |instructor|
#     puts instructor[:name]
# end

instructor_array = []
instructors.each do |instructor|
    instructor_array << instructor[:name]
end

# print instructor_array

# map / collect
# returns new array based on return value of the block
mapped_instructor_array = instructors.map do |instructor| 
    instructor[:name].upcase + " is a great instructor"
end


# print mapped_instructor_array

mapped_array = instructors.each {|instructor| instructor[:name]}
# print mapped_array == instructors

# find / detect
# returns first element that matches a condition
me = instructors.find do |instructor|
    instructor[:name] == "Paul"
end

# print me

# select / find_all
# returns array of all elements that matches a condition

coaches = instructors.select do |instructor|
    instructor[:role] == "coach"
end

coach_names = coaches.map {|coach| coach[:name]}

print coach_names


