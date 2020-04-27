class Animal

  attr_writer :name

  def initialize(name)
    @name = name.capitalize
  end

  def name
    "Hello my name is #{@name}"
  end

  def speak
    puts "Hello I am an animal."
  end

  def introduce(species)
    "I am an animal; specifically a #{species}"
  end

end

class Mammal < Animal 

  def warm_blooded?
    return true
  end

  def speak
    puts "I am a mammal"
    super
  end

  def lays_eggs?
    return false
  end

end

class Dog < Mammal 

  # attr_accessor :species

  @@species = "canine"
  attr_accessor :favorite_toy
  attr_reader :age

  def initialize(name, favorite_toy, age=1)
    @favorite_toy = favorite_toy
    @age = age
    super(name)
  end

  def speak
    super
    puts "Woof woof I am a dog and in dog years I am #{get_dog_age}"
  end

  def introduce
    super(@@species)
  end



  private
  # only called from inside the class 
  # everything under this word is private
  # usually helper methods for above code
  
    def get_dog_age
      return self.age * 7
    end

end

class Cat < Mammal 

end



module LaysEggs

  module InstanceMethods

    def lays_eggs?
      return true
    end

  end

  module ClassMethods

    def monotreme?
      return true
    end
  end

end

class Platypus < Mammal
  extend LaysEggs::ClassMethods
  include LaysEggs::InstanceMethods

end