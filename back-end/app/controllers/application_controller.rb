class ApplicationController < Sinatra::Base

    get '/' do
        { message: "Hello world",
         instructions: "navigate to /games, /reviews, or /users" }.to_json
      end

    get '/games' do
        Game.all.to_json
    end

        get '/games/:id' do
            Game.find(params[:id]).to_json
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


    post "/users" do
        user = User.create({first_name:params[:first_name], last_name:params[:last_name], username:params[:username], email:params[:email], password:params[:password]})
        user.to_json
    end
end