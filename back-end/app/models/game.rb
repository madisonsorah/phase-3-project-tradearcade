class Game < ActiveRecord::Base
    has_many :reviews
    has_many :ownerships
    has_many :users, through: :ownerships
  end
  