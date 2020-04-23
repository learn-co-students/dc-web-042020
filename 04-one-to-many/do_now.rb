# A puppy is initialized with a cuteness score of 5.  A puppy can raise
# its cuteness score by 3 points if it gets groomed, and lower its score
# by 5 points playing in the mud.  

# The following code works, but there are some problems.  Refactor this code 
# to improve it.  (The code can be downloaded from your learn.co page under
# lecture 04)

class Puppy

    attr_reader :name, :cuteness

    def initialize(name)
        @name = name
        @cuteness = 5
    end

    def cuteness=(new_cuteness)
        min = 1
        max = 10
        @cuteness = new_cuteness.clamp(min, max)
    end

    # def min_max_cute(change)
    #     self.cuteness += change
    #     print(self.cuteness)
    #     # if self.cuteness > max
    #     #     self.cuteness = max
    #     # elsif self.cuteness < min
    #     #     self.cuteness = min
    #     # end
    #     self.cuteness = self.cuteness.clamp(min, max)
    # end

    def play_in_the_mud
        self.cuteness = self.cuteness - 5
    end

    def take_a_bath
        self.cuteness = self.cuteness + 3
        # self.cuteness += 3
    end    
end

fido = Puppy.new("Fido")
puts fido.cuteness == 5 # test initial cuteness
fido.take_a_bath
puts fido.cuteness == 8 # test that take a bath raises cuteness by 3
fido.take_a_bath
puts fido.cuteness == 10 # test that cuteness cannot exceed 10

fido.cuteness = 200

puts fido.cuteness