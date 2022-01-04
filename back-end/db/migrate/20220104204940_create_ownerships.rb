class CreateOwnerships < ActiveRecord::Migration[6.1]
  def change
    create_table :ownerships do |t|
      t.integer :game_id #Foreign Key for Game
      t.integer :user_id #Foreign Key for User
    end
  end
end
