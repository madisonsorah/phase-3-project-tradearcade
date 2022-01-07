# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_07_184415) do

  create_table "games", force: :cascade do |t|
    t.string "title"
    t.string "platform"
    t.string "description"
    t.string "image"
  end

  create_table "histories", force: :cascade do |t|
    t.integer "game_id"
    t.integer "user_id"
    t.boolean "game_sent"
    t.boolean "game_received"
  end

  create_table "ownerships", force: :cascade do |t|
    t.integer "game_id"
    t.integer "user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "game_id"
    t.integer "user_id"
    t.string "review"
    t.float "score"
  end

  create_table "trades", force: :cascade do |t|
    t.integer "requesterID"
    t.integer "requester_gameID"
    t.integer "approverID"
    t.integer "approver_gameID"
    t.boolean "pending"
    t.boolean "accepted"
    t.boolean "denied"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
