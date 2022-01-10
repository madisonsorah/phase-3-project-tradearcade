puts "Deleting previous data"
Game.destroy_all
Review.destroy_all
User.destroy_all
Ownership.destroy_all
History.destroy_all
puts "🌱 Seeding data..."

#games
Game.create(title: "The Legend of Zelda: Breath of the Wild", 
platform: "Nintendo Switch", 
description: "Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.", 
image: "https://i.redd.it/jhp467u1f7ay.jpg")

Game.create(title: "NieR: Automata Game of the Yorha Edition", 
platform: "PlayStation 4", 
description: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines. Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world.", 
image: "https://i5.walmartimages.com/asr/a9f0b4e8-5c2f-4900-b571-7d7a908f949a.496dda3fb0ff389bc28217f9c3ed0b79.jpeg")

Game.create(title: "Ni No Kuni: Wrath of the White Witch", 
platform: "PlayStation 4", 
description: "Journey back to the other world in Ni no Kuni: Wrath of the White Witch Remastered. LEVEL-5's classic tale returns better than ever, with improved graphics and performance, on PS4 and PC. Join Oliver as he embarks on an adventure through a world inhabited by new friends and ferocious foes alike in the hopes of bringing back his mother after a tragic incident. With a copy of the Wizard's Companion in his hand and his trusty friend Drippy by his side, he will travel across this rich fantasy world to tame familiars, take on enemies, and overcome the countless challenges that stand between him and his mother's salvation.", 
image: "https://gameplanet-53f8.kxcdn.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/n/i/ni-no-kuni-remastered-ps4_1_1_1.jpg")

Game.create(title: "Super Smash Bros. Ultimate", 
platform: "Nintendo Switch", 
description: "Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more!", 
image: "https://ssb.wiki.gallery/images/thumb/1/15/Super_Smash_Bros_Ultimate_Box_Art.png/1200px-Super_Smash_Bros_Ultimate_Box_Art.png")

Game.create(title: "Pokemon Brilliant Diamond", 
platform: "Nintendo Switch", 
description: "Revisit the Sinnoh region and the story of the Pokémon Diamond Version game Experience the nostalgic story from the Pokémon Diamond Version game in a reimagined adventure, Pokémon™ Brilliant Diamond, now on the Nintendo Switch™ system! Adventures in the Pokémon Brilliant Diamond game will take place in the familiar Sinnoh region. Rich in nature and with mighty Mount Coronet at its heart, Sinnoh is a land of many myths passed down through the ages. You’ll choose either Turtwig, Chimchar, or Piplup to be your first partner Pokémon and then set off on your journey to become the Champion of the Pokémon League. Along the way, you’ll be able to encounter the Legendary Pokémon Dialga.", 
image: "https://cdn.shopify.com/s/files/1/0027/8298/6309/products/pokemon_brilliant_diamond_box_art.jpg?v=1637159188")

Game.create(title: "Halo Infinite", 
platform: "Xbox Series X", 
description: "When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. The legendary Halo series returns with the most expansive Master Chief story yet.", 
image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6414/6414163_sd.jpg")

#reviews
Review.create(game_id: 1, user_id: 2, review: "Favorite game of all time!", score: 10)
Review.create(game_id: 4, user_id: 1, review: "Great for playing with friends.", score: 8)

#users
User.create(first_name: "Kenneth", last_name: "Kim", username: "KimKenn2", email: "kkm2059@gmail.com", password: "password1234")
User.create(first_name: "Madison", last_name: "Sorah", username: "mochipancake", email: "madisonsorah@gmail.com", password: "catsarecute1")

#ownerships
Ownership.create(game_id: 1, user_id: 2)
Ownership.create(game_id: 2, user_id: 2)
Ownership.create(game_id: 3, user_id: 2)
Ownership.create(game_id: 4, user_id: 1)
Ownership.create(game_id: 5, user_id: 1)
Ownership.create(game_id: 6, user_id: 1)

#histories
History.create(game_id: 1, user_id: 1, game_sent: false, game_received: true)
History.create(game_id: 1, user_id: 2, game_sent: true, game_received: false)


puts "Seeding Done!"