class Doctor < ActiveRecord::Base

    def hospital
        # returns the hospital (object) this doctor works at
        # e.g., jd.hospital = <Hospital name: Sacred Heart>
    end
end