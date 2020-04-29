require 'bundler'
require_relative '../lib/book.rb'
require_relative '../lib/author.rb'
Bundler.require

DB = SQLite3::Database.new('db/library.db')
# DB.execute(some_sql)


# module SQLite3

#     class Database

#         def initialize(database_location)
#             @database_location = database_location
#         end

#         def execute(sql)
#             # runs this sql statement

#         end


#     end

# end