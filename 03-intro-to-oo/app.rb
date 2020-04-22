# app_website = "www.mysite.com"

# # thing
# #     - mass 
# #     - molecular structure
# #     - visible_to_human_eye?

# # solids
# #     - height
# #     - weight
# #     - poisonous_if_ingested?

# # x = Object.new
# # y = Object.new
# # z = x
# # puts x
# # puts z
# # puts x == z

# # class String


# # end

# # class Array

# # end

# x = "flatiron"
# # puts x.length
# # # puts x.methods

# # y = true
# # # y.length

# # z = Array.new
# # puts z.methods
# x = Object.new
# y = nil.to_i
# puts y

# def add(a, b)
#     return a.to_i + b.to_i
# end

# a = 'num_of_students_in_the_class'
# a = 11
# b = 'num_of_unicorns_in_the_class'
# b = nil

# print add(a, b)

# ella = {"name": "Ella", "age": 18, "floofiness": 10}
# garfield = {"name": "Garfield", "age": 50, "floofiness": 3}

# puts ella[:name]

# puts garfield[:name]

class Cat

    attr_reader :number_of_legs, :floofiness
    attr_writer :age
    attr_accessor :name

    @@all = [] # class variable

    def initialize(name, floofiness, age, number_of_legs=4)
        @name = name
        @floofiness = floofiness
        @number_of_legs = number_of_legs
        @age = age
        @@all << self
        # puts "We have created a new cat.  We are a god."
    end

    def self.all  # class method
        # returns an array of all the cats
        return @@all 
    end

    def self.all_names
        # return @@all_names
        return Cat.all.map {|cat| cat.name}
    end

    def meow
        @greeting = "Meow Meow"
        puts "#{@greeting} I am a pretty kitty"
    end

    def say_hi

        puts @greeting
    end

    def scratch
        return "Kitty scratches the annoying barking dog"
    end

    def age
        if @age <= 5
            "I am a kitten"
        else
            "I am an older, but no less perfect, adult cat."
        end
    end

    def tell_secret_age
        return @age
    end

    def introduce
        # My name is Ella, I have a floofiness score of 10 
        # and I am an older, but no less perfect, adult cat
        puts "My name is #{self.name}, I have a floofiness score of #{self.floofiness} and #{self.age}"
    end


    # attr_writer :name
    # def name=(new_name)
    #     # setter
    #     @name = new_name
    # end

    # attr_reader :name
    # def name
    #     # getter
    #     return @name
    # end

    # def floofiness
    #     @floofiness
    # end

    def floofiness=(new_floofiness)
        print "floofiness called"
        if new_floofiness > 10
            new_floofiness = 10
        elsif new_floofiness < 1
            new_floofiness = 1
        end
        @floofiness = new_floofiness
    end
    # def number_of_legs
    #     @number_of_legs
    # end

    # def age=(new_age)
    #     @age = new_age
    # end

    def brush_cat
        puts self.name
        self.floofiness=(self.floofiness + 3)
        # @floofiness = self.floofiness
    end

end



ella = Cat.new("Ella", 10, 18)

# print ella.all 
lexi = Cat.new("Lexi", 5, 4, 3)
# # garfield = Cat.new
# ella.introduce
# lexi.introduce
# # ella.meow

# # ella.say_hi
if Cat.all.length > 0  # class methods
    print("there are some cats")
else
    print("there are no cats.  The world is sad.")
end
# # ella.give_name("Ella")
# # ella.name = "Ella"
# puts ella.name


# # ella.instance_variable_set(:@floofiness, 10)
# puts ella.methods
# puts ella.tell_secret_age
# print lexi.all

# print ella.all_names

print ella.class.all_names
