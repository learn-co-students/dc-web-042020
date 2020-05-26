# Proc: special kind of method that is a type of a closure

# [1, 2, 3].each {|num| puts num * 10}

number  = 5

# def times_ten
#     return Proc.new {|num| puts num * 10}
# end

# times_ten.call(number)

def times_num(factor)
    return Proc.new {|num| puts num * factor}
end

times3 = times_num(3)
times5 = times_num(5)

puts times3.call(number)

# times5.call(number)

# def test_call(x)
#     puts x * 10
# end

test_call.call(5)

# [1, 2, 3].each(&times_num)
