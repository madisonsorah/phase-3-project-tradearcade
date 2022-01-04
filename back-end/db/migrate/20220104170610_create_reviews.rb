class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :game_id #Foreign Key for Game
      t.integer :user_id #Foreign Key for User
      t.string :review
      t.float :score
    end
  end
end
