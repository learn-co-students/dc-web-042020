# Rails API
- Dynamic web pages with JS front end and Rails backend
- Single page application (with various request-response cycles)

### Why not use json-server forever?
- Use relationship between models
- Manage large database (update/add rows)
- Respond with request for data with data (json)

### Getting Started
`rails new <app_name> --api --database=postgresql`

### Useful Rails Commands
- `rails g model cat`
- `rake db:migrate rake db:seed`
- `rails g controller cats`

### CORS
- Cross Origin Resource Sharing

### Serializers

##### Custom Serializers

### CRUD
 - We can Read
 - Let's now Create
 - How would we do Update or Delete?



I can see all hobbies
  - /monsters, /toys, /dogs

I can see all cats and their hobby relationships
   - 'get' /cats

I can register (fill out form) new cats to the club
- When the form is submitted, POST to "/cats", manipulate the DOM by adding cat






 Cat.destroy_all
 Hobby.destroy_all
 CatHobby.destroy_all




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
