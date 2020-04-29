1.  Write the SQL to create tables for Books (id, title, author_id) and Authors (id, name)

```sql
CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author_id INTEGER)

CREATE TABLE authors (
    id INTEGER PRIMARY KEY
    name TEXT)
```
2.  Write the SQL to get all Authors

3.  Write the SQL to create a new author, given the author's name

```sql
INSERT INTO authors (name) VALUES ({{new_author_name}})

```

4.  Write the SQL to get all Books by a given author, given the author's id

5.  Write the SQL to get all Books by a given author, given the author's name

6.  Write the SQL to update a Book's title