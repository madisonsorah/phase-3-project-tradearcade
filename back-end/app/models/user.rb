class User < ActiveRecord::Base
    has_many :reviews
    has_many :ownerships
    has_many :games, through: :ownerships
  end
  