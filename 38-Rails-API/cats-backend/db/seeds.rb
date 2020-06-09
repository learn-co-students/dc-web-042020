Cat.destroy_all
Hobby.destroy_all
CatHobby.destroy_all


cat1 = Cat.create(name: "Ella", floofiness: 4, picture: "https://pbs.twimg.com/profile_images/2389487549/Ella_400x400.jpg")
cat2 = Cat.create(name: "Kitty", floofiness: 3, picture: "https://www.catster.com/wp-content/uploads/2015/06/767aa606fa956693a4efe4b9da746a00.jpg")
cat3 = Cat.create(name: "Yolo", floofiness: 2, picture: "https://cdn.shopify.com/s/files/1/0113/5192/products/8124yol_Yolox9_mincingmockingbird_1024x1024.jpg")
cat4 = Cat.create(name: "Crookshanks", floofiness: 1, picture: "https://www.cinemacats.com/wp-content/uploads/movies/harrypotterprisoner05.jpg")

hobby1 = Hobby.create(name: "Nothing", description: "...")
hobby2 = Hobby.create(name: "Nap", description: "sleeping, curling up")
hobby3 = Hobby.create(name: "DJing", description: "Spinning, turn up")

 CatHobby.create(cat_id: cat1.id, hobby_id: hobby1.id)
 CatHobby.create(cat_id: cat2.id, hobby_id: hobby1.id)
 CatHobby.create(cat_id: cat3.id, hobby_id: hobby1.id)
 CatHobby.create(cat_id: cat2.id, hobby_id: hobby2.id)
 CatHobby.create(cat_id: cat3.id, hobby_id: hobby2.id)
 CatHobby.create(cat_id: cat4.id, hobby_id: hobby2.id)
 CatHobby.create(cat_id: cat1.id, hobby_id: hobby3.id)
 CatHobby.create(cat_id: cat2.id, hobby_id: hobby3.id)
 CatHobby.create(cat_id: cat3.id, hobby_id: hobby3.id)
 CatHobby.create(cat_id: cat4.id, hobby_id: hobby3.id)
