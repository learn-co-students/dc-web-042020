# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Flag.destroy_all

Flag.create(region: "Ecuador", info: "The mountain in the coat of arms is Mt. Chimborazo, which is the furthest place on the surface of the Earth from the center of the Earth", image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png", rating: 4)
Flag.create(region:"San Marino", info:"The ostrich feathers are weather vanes", image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/800px-Flag_of_San_Marino.svg.png", rating: 4)
Flag.create(region:"Kyrgyzstan", info:"The symbol in the middle is the roof of a yurt", image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1024px-Flag_of_Kyrgyzstan.svg.png", rating:4)
Flag.create(region:"Northern Territory of Australia", info:"The flower is a Sturt's desert rose", image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_the_Northern_Territory.svg/1280px-Flag_of_the_Northern_Territory.svg.png", rating: 5)
Flag.create(region:"Provo, Utah (former)", info:"Notoriously bad", image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Flag_of_Provo%2C_Utah_%281989%E2%80%932015%29.svg/1024px-Flag_of_Provo%2C_Utah_%281989%E2%80%932015%29.svg.png", rating: 1)
Flag.create(region:"New Zealand (not chosen)", info:"The kiwi and the silver fern are the national bird and plant of NZ, respectively", image_url:"https://upload.wikimedia.org/wikipedia/commons/0/07/Laser-kiwi-flag.jpg", rating: 3)
