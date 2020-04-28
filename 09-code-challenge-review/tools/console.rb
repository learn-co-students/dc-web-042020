require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


mary = Driver.new("Mary")
bob = Driver.new("Bob")
tim = Passenger.new("Tim", 19)
jellicle = Passenger.new("Jellicle", 103)

ride1 = Ride.new(tim, bob, 50.0)
ride2 = Ride.new(tim, mary, 75.0)
ride3 = Ride.new(jellicle, mary, 100.0)

# puts Driver.mileage_cap(100) == [mary]
binding.pry
