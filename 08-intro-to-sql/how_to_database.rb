require 'sqlite3'
require 'pry'


db = SQLite3::Database.new('chinook.db')

db.execute("select * from artists")

