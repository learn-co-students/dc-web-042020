# Objectives
- Explain how and why we use the MVC pattern (Model-View-Controller)
    - Models:  all your Active Record models (lots o' logic)
    - Controllers: Logic of our app (processing the requests and returning a response) (some logic)
    - Views: HTML templates (presentational stuff) (as little logic as possible--pertains to presentation)

    - "Fat Models, Skinny Views"

- Map CRUD actions to RESTful routes
    - REpresesentational State Transfer

## Deliverables

- View a listing of all books
    - GET request sent to "/books" should show a list of all books

- View a detail page for an individual book

- Create a new book

- Edit an existing book

- Delete an existing book