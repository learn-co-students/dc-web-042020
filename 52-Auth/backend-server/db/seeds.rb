User.destroy_all

15.times do
  User.create(
    username: Faker::TvShows::Friends.character.split(/ /).join(),
    password: 'helloworld',
    avatar: Faker::Avatar.image,
    bio: Faker::TvShows::Friends.quote
  )
end
