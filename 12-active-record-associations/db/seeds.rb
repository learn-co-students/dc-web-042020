Doctor.destroy_all
Hospital.destroy_all
# Patient.destroy_all

sacred_heart = Hospital.find_or_create_by(name: "Sacred Heart")
county = Hospital.find_or_create_by(name: "County")

jd = Doctor.find_or_create_by(name: "John Dorian", hospital: sacred_heart)
turk = Doctor.find_or_create_by(name: "Chris Turk", hospital: sacred_heart)
elliot = Doctor.find_or_create_by(name: "Elliot Reid", hospital: sacred_heart)
doug = Doctor.find_or_create_by(name: "Doug Ross", hospital_id: county.id)

mrs_wilke = Patient.find_or_create_by(name: "Mrs Wilke")
johnny = Patient.find_or_create_by(name: "Johnny the Tackling Alzheimers Patient")

mrs_wilke.doctors << jd 
jd.patients << johnny
turk.patients << mrs_wilke

# DoctorPatient.new(doctor: jd, patient: mrs_wilke)