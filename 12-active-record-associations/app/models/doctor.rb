class Doctor < ActiveRecord::Base

    belongs_to :hospital
    has_many :doctor_patients
    has_many :patients, through: :doctor_patients

    # def hospital
    #     # returns the hospital (object) this doctor works at
    #     # e.g., jd.hospital = <Hospital name: Sacred Heart>

    #     # find the hospital where the id is equal 
    #     # to this doctor (self)'s hospital id'
    #     id_of_hospital_to_find = self.hospital_id
    #     Hospital.find(id_of_hospital_to_find)

    # end

end