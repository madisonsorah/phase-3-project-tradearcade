puts "Deleting previous data"
Game.destroy_all
Review.destroy_all
User.destroy_all
Ownership.destroy_all
# History.destroy_all
puts "🌱 Seeding data..."

#games
Game.create(title: "The Legend of Zelda: Breath of the Wild", platform: "Nintendo Switch", description: "Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.", image: "https://media.gamestop.com/i/gamestop/10141904/The-Legend-of-Zelda-Breath-of-the-Wild---Nintendo-Switch?$pdp2x$")
Game.create(title: "NieR: Automata Game of the Yorha Edition", platform: "PlayStation 4", description: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world.", image: "https://media.gamestop.com/i/gamestop/10171354/NieR-Automata-Game-of-the-Yorha-Edition---PlayStation-4?$pdp2x$")
Game.create(title: "FINAL FANTASY VII Remake", platform: "PlayStation 4", description: "The first entry in a multi-part saga, delivering a level of depth inconceivable for the original. The mind-blowing story, unforgettable characters, epic battles and technical excellence collide. The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet's very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves Avalanche has stepped up its resistance. Cloud Strife, a former member of Shinra's elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.", image: "https://media.gamestop.com/i/gamestop/10177032/FINAL-FANTASY-VII-Remake---PlayStation-4?$pdp2x$")
Game.create(title: "Super Smash Bros. Ultimate", platform: "Nintendo Switch", description: "Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more!", image: "https://media.gamestop.com/i/gamestop/10159620/Super-Smash-Bros.-Ultimate---Nintendo-Switch?$pdp2x$$&fmt=webp")
Game.create(title: "Pokemon Brilliant Diamond", platform: "Nintendo Switch", description: "Revisit the Sinnoh region and the story of the Pokémon Diamond Version game Experience the nostalgic story from the Pokémon Diamond Version game in a reimagined adventure, Pokémon™ Brilliant Diamond, now on the Nintendo Switch™ system! Adventures in the Pokémon Brilliant Diamond game will take place in the familiar Sinnoh region. Rich in nature and with mighty Mount Coronet at its heart, Sinnoh is a land of many myths passed down through the ages. You’ll choose either Turtwig, Chimchar, or Piplup to be your first partner Pokémon and then set off on your journey to become the Champion of the Pokémon League. Along the way, you’ll be able to encounter the Legendary Pokémon Dialga.", image: "https://media.gamestop.com/i/gamestop/11120692/Pokemon-Brilliant-Diamond---Nintendo-Switch?$pdp2x$")
Game.create(title: "Halo Infinite", platform: "Xbox Series X", description: "When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. The legendary Halo series returns with the most expansive Master Chief story yet.", image: "https://media.gamestop.com/i/gamestop/11108375/Halo-Infinite---Xbox-Series-X?$pdp2x$")

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
# History.create(game_id: 1, user_id: 1, game_sent: false, game_received: true)
# History.create(game_id: 1, user_id: 2, game_sent: true, game_received: false)


puts "Seeding Done!"