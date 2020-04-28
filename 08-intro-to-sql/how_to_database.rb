require 'sqlite3'
require 'pry'


db = SQLite3::Database.new('chinook.db')

puts db.execute("select * from artists")

multi_line_sql = <<-SQL
    SELECT DISTINCT artists.name FROM artists
    JOIN albums ON albums.artist_id = artists.id
    JOIN tracks ON tracks.album_id = albums.id
    JOIN genres ON tracks.genre_id = genres.id
    WHERE genres.name = "Pop";
SQL

puts db.execute(multi_line_sql)