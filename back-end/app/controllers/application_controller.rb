class ApplicationController < Sinatra::Base

    get '/' do
        { message: "Hello world",
         instructions: "navigate to /games, /reviews, or /users" }.to_json
      end

    get '/games' do
        Game.all.to_json({include: [:reviews]})
    end

    post '/games' do
        game = Game.create({
            title:params[:title], 
            platform:params[:platform], 
            image:params[:image],
            description:params[:description]
            })
        user = User.find(params[:user_id])
        user.games<<game
        game.to_json
    end

    get '/games/:id' do
        Game.find(params[:id]).to_json
    end

    get '/games/:id/reviews' do
        Game.find(params[:id]).reviews.to_json
    end

    get '/games/:id/users' do
        Game.find(params[:id]).users.to_json
    end

    get '/reviews' do
        Review.all.to_json
    end

    get '/users' do
        User.all.to_json
    end

    get '/ownerships' do
        Ownership.all.to_json
    end

    get '/users/:id' do
        User.find(params[:id]).to_json
    end

    get '/users/:id/games' do
        User.find(params[:id]).games.to_json
    end

    get '/tradehistory' do
        History.all.to_json({include: [:game]})
    end

    get '/trades' do
        Trade.all.to_json
    end

    post '/trades' do
        trade = Trade.create(params)
    end

    post "/users" do
        user = User.create({first_name:params[:first_name], last_name:params[:last_name], username:params[:username], email:params[:email], password:params[:password]})
        user.to_json
    end

end