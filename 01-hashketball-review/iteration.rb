require 'pry'

instructors = [
    {name: "Paul", role: "lead"},
    {name: "Shannon", role: "coach"},
    {name: "Chine", role: "coach"},
    {name: "Yoan", role: "coach"}
]


def print_coaches_names(teachers)
    binding.pry

    coaches = teachers.seldxgafdect do |teacher|
        teacher[:role] == "coach"
    end

    names = coaches.each do |coach|
        coach[:name]
    end
    binding.pry
    loud_names = names.map do |name|
        name.upcase
    end

    return loud_names
end

# Goal:  ["SHANNON", "CHINE", "YOAN"]

print_coaches_names(instructors)