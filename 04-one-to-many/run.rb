require 'pry'
require_relative "./tweet.rb"
require_relative "./user.rb"
# puts "hi"
coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")

tweet1 = Tweet.new("Need some coffee", coffee_dad)
tweet2 = Tweet.new("Want coffee", coffee_dad)
tweet3 = Tweet.new("Death is only the beginning", coffee_dad)
tweet4 = Tweet.new("I love tea", tea_uncle)

puts "User knows their username"
puts coffee_dad.username == "Coffee Dad"
puts "Tweet knows its message"
puts tweet1.message == "Need some coffee"
puts "Tweet class can get all tweets"
puts Tweet.all.include?(tweet1)
puts Tweet.all.include?(tweet2)
puts "Tweet knows its user?"
puts tweet1.user == coffee_dad
puts "Tweet knows its user's username"
puts tweet1.username == "Coffee Dad"

puts "User knows their tweets"
puts coffee_dad.tweets.include?(tweet1)
puts !coffee_dad.tweets.include?(tweet4)

tweet5 = coffee_dad.post_tweet("Want more coffee")
puts coffee_dad.tweets.include?(tweet5)

# [1, 2, 3].include?(2) # true
# [1, 2, 3].include?(4) # false