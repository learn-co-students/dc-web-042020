require 'pry'

class Restaurant

    attr_reader :name, :meals

    def initialize(name)
        @name = name
        @meals = []
    end

    def add_meal(meal)
        binding.pry
        self.meals << meal
        meal.restaurants << self
    end

    def remove_meal(meal)

    end
end

class Meal

    attr_reader :name, :restaurants

    def initialize(name)
        @name = name
        @restaurants = []
    end

    def add_restaurant(restaurant)
        self.restaurants << restaurant
        restaurant.meals << self
    end

    def remove_restaurant(restaurant)

    end

end

mcdonalds = Restaurant.new("McDonalds")
bk = Restaurant.new("Burger King")

# puts mcdonalds.name

burger = Meal.new("Hamburger")
# puts burger.name

mcdonalds.add_meal(burger)

puts mcdonalds.meals.map {|meal| meal.name}

puts burger.restaurants.map {|restaurant| restaurant.name}
