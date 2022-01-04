puts "Deleting previous data"
Game.destroy_all
Review.destroy_all
User.destroy_all
Ownership.destroy_all
puts "🌱 Seeding data..."


#games
Game.create(title: "Project Test", platform: "PC")
Game.create(title: "Project Test 2", platform: "Nintendo Switch")

#reviews
Review.create(game_id: 1, user_id: 1, review: "It's alright", score: 5)
Review.create(game_id: 2, user_id: 1, review: "Better than the first", score: 6)

#users
User.create(name: "Todd")

#ownerships
Ownership.create(game_id: 1, user_id: 1)
Ownership.create(game_id: 2, user_id: 1)

puts "Seeding Done!"