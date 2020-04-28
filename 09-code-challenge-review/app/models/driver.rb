class Driver

    attr_accessor :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all 
        @@all 
    end

    # def name
    #    return @name 
    # end

    def rides
        Ride.all.select do |ride|
            ride.driver == self 
        end
    end

    def total_mileage
        # returns total mileage taken by this driver
        distances = self.rides.map {|ride| ride.distance }
        return distances.sum
    end

    def self.mileage_cap(distance)
        # returns all drivers who have exceeded that distance

        # far_drivers = []
        # # Look at each driver
        # Driver.all.each do |driver|
        #     # seeing the total distance for the driver
        #     # if mileage of the driver exceeds distance arg, 
        #     if driver.total_mileage > distance
        #         # put into the array of far_drivers
        #         far_drivers << driver 
        #     end
        # end

        far_drivers = Driver.all.select do |driver|
            driver.total_mileage > distance
        end
        return far_drivers
    end
end