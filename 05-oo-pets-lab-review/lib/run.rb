require_relative './cat.rb'
require_relative './dog.rb'
require_relative './owner.rb'
require 'pry'

shannon = Owner.new("Shannon")
chine = Owner.new("Chine")
kevin = Dog.new("Kevin", shannon)
bob = Dog.new("Bob", chine)
rex = Dog.new("Rex", chine)
stacy = Cat.new("Stacy", chine)
denise = Cat.new("Denise", shannon)
fluffy = Cat.new("Fluffy", shannon)

# cats = chine.cats.map {|cat| cat.name }
# puts cats
dogs = shannon.dogs.map {|dog| dog.name }
puts dogs
shannon.buy_dog("William")
puts "_________"
new_dogs = shannon.dogs.map {|dog| dog.name }
puts new_dogs

shannon.sell_pets
