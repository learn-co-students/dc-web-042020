class Hospital < ActiveRecord::Base
    # attr_accessor :thing

    has_many :doctors
    
    # def doctors 
    #     # returns all the doctors who work at this hospital

    #     # go through all doctors and find all doctors
    #     # that have this hospital's id

    #     Doctor.all.select do |doctor|
    #         doctor.hospital_id == self.id
    #     end
    # end

#     def thing 
#         @thing
#     end

#     def thing=(new_thing)
#         @thing = new_thing
#     end
end