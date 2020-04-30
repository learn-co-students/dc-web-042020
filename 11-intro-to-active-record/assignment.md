## Setup:

- Pull down today's lecture code so far.  Remember that if you've made your own changes in this folder, you will have to commit them (_not_ push them, just commit!) first.  Ask if you have trouble!
- Migrate your database to set it up.  From your console, type `rake db:migrate`
- Seed your database with some initial data.  From your console, type `rake db:migrate`

## In your console, write ActiveRecord queries to perform the following tasks (you may need to Google!):


1. Create three new authors
           name      penname
    -------------- | --------
    Samuel Clemens | Mark Twain
    Steven King    | Richard Bachman
    Emily Bronte   | None

2. Find the author with an id of 2
3. Find the author with a penname of "Mark Twain"
4. Find the author named "Steven King" and change the spelling of his name to "Stephen King"
    - Make sure the change persists in the database... you can look in your DB Browser or re-fetch the author from the db.
    - If you spelled it correctly when you initialized it in step 1, kick yourself for not following directions.
5. Find all authors who don't have a penname
6. Delete Emily Bronte from the database.  That's what she gets for writing Wuthering Heights.
7. Add a column to the database called "year_born".  It should be an integer.
8. Retrieve all the authors, in alphabetical order

