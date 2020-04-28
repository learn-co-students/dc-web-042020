class Ride

    attr_accessor :passenger, :driver, :distance

    @@all = []

    def initialize(passenger, driver, distance)
        @passenger = passenger
        @driver = driver
        @distance = distance
        @@all << self
    end

    def self.all 
        @@all 
    end

    def self.all_distances
        @@all_distances
    end

    def self.average_distance

        # total distance / number of rides
        number_of_rides = Ride.all.length

        distances = Ride.all.map {|ride| ride.distance}
        total_distance = distances.sum 
        return total_distance / number_of_rides
    end
end





