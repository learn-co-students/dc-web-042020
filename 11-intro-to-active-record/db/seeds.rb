
# idempotent - after first run, won't change anything

Author.find_or_create_by(name: "Toni Morrison")
Author.find_or_create_by(name: "Theodore Geisel", penname: "Dr. Seuss")
Author.find_or_create_by(name: "Roald Dahl")
Author.find_or_create_by(name: "Herman Melville")