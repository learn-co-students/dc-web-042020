class Meal

    attr_reader :name

    def initialize(name)
        @name = name
    end

    def restaurants
        rms = RestaurantMeal.all.select do |rm|
            rm.meal == self 
        end
        rms.map {|rm| rm.restaurant}
    end

    def add_restaurant(restaurant)
    end

    def restaurant_names
    end

    def remove_restaurant(restaurant)
    end 

end
