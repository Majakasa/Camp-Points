# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160604015112) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campers", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.integer  "allsports"
    t.integer  "archery"
    t.integer  "canoeing"
    t.integer  "creative_arts"
    t.integer  "culinary_fun"
    t.integer  "dance"
    t.integer  "eagle_I"
    t.integer  "fencing"
    t.integer  "kayaking"
    t.integer  "performing_arts"
    t.integer  "rock_climbing"
    t.integer  "sup"
    t.integer  "sailing"
    t.integer  "swimming"
    t.integer  "tennis"
    t.integer  "water_ski"
    t.integer  "windsurfing"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
