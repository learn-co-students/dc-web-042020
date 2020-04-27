require 'pry'
require_relative './animals.rb'
require_relative './fish.rb'


fido = Dog.new("fido", "squeaky ball")

# ella = Cat.new

# puts fido.is_a?(Dog)
# puts fido.class == Dog

puts fido.introduce

# puts ella.class.ancestors

petey = Platypus.new("Petey")

# puts fido.name
# puts petey.lays_eggs?
# puts Platypus.monotreme?


puts fido.get_dog_age