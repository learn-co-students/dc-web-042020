class Passenger

    attr_accessor :name, :age

    @@all = []

    def initialize(name, age)
        @name = name
        @age = age
        @@all << self
    end


    def rides
        # returns all the passenger's rides
        rides = Ride.all.select do |ride|
            ride.passenger == self 
        end
    end

    def drivers 
        # iterate through rides method
        drivers = self.rides.collect do |ride|
        # find the driver for each ride
            ride.driver
        end
        # return array of drivers
        return drivers

    end 

    def self.all 
        @@all 
    end

    def total_distance
        # go through array of rides
        # find distance of each ride
        # add distances together
        distances = self.rides.map do |ride|
            ride.distance 
        end
        return distances.sum
    end

    def self.premium_members
        # returns all premium members (traveled over 100
        # miles with the service)

        premium_members = []

        # find all passengers
        Passenger.all.each do |passenger|
            # get each passenger's distance
            # if it is over 100, put them in array
            if passenger.total_distance > 100
                premium_members << passenger
            end
        end
        # return array
        return premium_members


        # Passenger.all.find_all do |passenger|
        #     passenger.total_distance > 100
        # end
    end

end

















