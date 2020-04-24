require "pry"
require_relative "./restaurant.rb"
require_relative "./meal.rb"
require_relative "./restaurant_meal.rb"

mcdonalds = Restaurant.new("McDonalds")
bk = Restaurant.new("Burger King")

# puts mcdonalds.name

burger = Meal.new("Hamburger")
fries = Meal.new("French fries")

RestaurantMeal.new(mcdonalds, burger, 10)
RestaurantMeal.new(bk, burger, 10)

# mcdonalds.add_meal(burger)

# puts mcdonalds.meals.include?(burger)
# print burger.restaurants

mcdonalds.add_meal(fries)
mcdonalds.remove_meal(burger)

print mcdonalds.meals
# puts !mcdonalds.meals.include?(burger)


# print burger.restaurant_names