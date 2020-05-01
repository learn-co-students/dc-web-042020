Draw out the domain of the below models.  

* Pay close attention to the relationships!
* In addition to the fields listed, think about which models should hold the 
_foreign keys_ of the others.  Who should keep track of what?

Your models are `Doctor`s, `Patient`s, and `Hospital`s.

A `Doctor` has a name, hospital_id
A `Patient` has a name
A `Hospital` has a name
A `DoctorPatient` has a patient_id, a doctor_id

One to Many Relationship
A `Doctor` can only work at one `Hospital`.
A `Hospital` can have multiple `Doctor`s.

Many to Many relationship
A `Doctor` can have many `Patient`s
A `Patient` can have many `Doctor`s