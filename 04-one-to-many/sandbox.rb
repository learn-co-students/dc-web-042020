class School

    attr_reader :name
    # def name
    #     @name
    # end

    def initialize(name)
        @name = name
        @instructors = []
    end

    def add_instructor(instructor)
        @instructors << instructor
    end

    def instructors
        return @instructors
    end

    def change_name(new_name)
        @name = new_name
    end
end

class Instructor

    attr_accessor :name, :favorite_color

    def initialize(name, favorite_color)
        @name = name
        @favorite_color = favorite_color
    end

    def introduce
        puts "Hi my name is #{self.name} and my favorite_color is #{self.favorite_color}."
    end

end
flatiron = School.new("Flatiron")
flatiron.change_name("something")
puts flatiron.name

# paul = Instructor.new("Paul", "green")
# shannen = Instructor.new("Shannen", "green")
# chine = Instructor.new("Chine", "blue")

# flatiron.add_instructor(paul)
# flatiron.add_instructor(chine)
# flatiron.add_instructor(shannen)
# # print flatiron.instructors

# shannen.name = "Shannon"
# shannon = shannen
# print "\n\n"
# print flatiron.instructors

# paul = flatiron.instructors.find {|instr| instr.name == "Paul"}

# def introduce(name, favorite_color)
#     puts "Hi my name is #{name} and my favorite_color is #{favorite_color}."
# end
# paul = {:name => "Paul", :favorite_color => "green"}

# introduce(paul[:name], paul[:favorite_color])

# cat = {:moniker => "Ella", :favorite_food => "tuna"}

# def introduce(moniker, favorite_food)
#     puts "Hi my moniker is #{name} and my favorite_food is #{favorite_food}."
# end

# introduce(paul[:name], paul[:favorite_color])

# flatiron.instructors.each {|teacher| teacher.introduce }

def recursive(x)
    return recursive(x)
end

recursive(3)