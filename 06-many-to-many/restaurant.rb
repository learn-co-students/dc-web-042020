class Restaurant

    attr_reader :name

    def initialize(name)
        @name = name
    end

    def meals
        rms = RestaurantMeal.all.select do |rm|
            rm.restaurant == self
        end
        rms.map do |rm|
            rm.meal 
        end
    end

    def add_meal(meal)
        RestaurantMeal.new(self, meal)
    end

    def remove_meal(meal)
        to_delete = RestaurantMeal.all.find do |record|
            record.meal == meal && record.restaurant == self
        end
        RestaurantMeal.all.delete(to_delete)

    end
end