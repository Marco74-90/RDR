# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create(email:"Joe@123.com", password:"123", password_confirmation: "123")
User.create(email:"Barry@123.com", password:"123", password_confirmation: "123")
User.create(email:"Patty@123.com", password:"123", password_confirmation: "123")
User.create(email:"Iris@123.com", password:"123", password_confirmation: "123")
User.create(email:"Eddie@123.com", password:"123", password_confirmation: "123")
User.create(email:"Wally@123.com", password:"123", password_confirmation: "123")
User.create(email:"Caitlin@123.com", password:"123", password_confirmation: "123")
User.create(email:"Falicity@123.com", password:"123", password_confirmation: "123")
User.create(email:"Norah@123.com", password:"123", password_confirmation: "123")
User.create(email:"Oliver@123.com", password:"123", password_confirmation: "123")

