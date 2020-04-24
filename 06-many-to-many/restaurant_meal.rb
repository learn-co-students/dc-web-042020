class RestaurantMeal

    attr_reader :restaurant, :meal
    attr_accessor :price 

    @@all = []

    def initialize(restaurant, meal, price=10)
        @restaurant, @meal, @price = restaurant, meal, price
        @@all << self
    end

    def self.all 
        @@all 
    end



end