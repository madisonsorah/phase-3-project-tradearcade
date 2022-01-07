class CreateTrades < ActiveRecord::Migration[6.1]
  def change
    create_table :trades do |t|
      t.integer :requesterID
      t.integer :requester_gameID
      t.integer :approverID
      t.integer :approver_gameID
      t.boolean :pending
      t.boolean :accepted
      t.boolean :denied
    end
  end
end
