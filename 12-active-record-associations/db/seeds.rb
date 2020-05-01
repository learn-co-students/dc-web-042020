Doctor.destroy_all
Hospital.destroy_all
# Patient.destroy_all

sacred_heart = Hospital.find_or_create_by(name: "Sacred Heart")
county = Hospital.find_or_create_by(name: "County")

jd = Doctor.find_or_create_by(name: "John Dorian", hospital_id: sacred_heart.id)
turk = Doctor.find_or_create_by(name: "Chris Turk", hospital_id: sacred_heart.id)
elliot = Doctor.find_or_create_by(name: "Elliot Reid", hospital_id: sacred_heart.id)
doug = Doctor.find_or_create_by(name: "Doug Ross", hospital_id: county.id)