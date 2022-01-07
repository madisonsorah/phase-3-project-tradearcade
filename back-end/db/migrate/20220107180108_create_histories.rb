class CreateHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :histories do |t|
      t.integer :game_id #Foreign Key for Game
      t.integer :user_id #Foreign Key for User
      t.boolean :game_sent
      t.boolean :game_received

    end
  end
end
