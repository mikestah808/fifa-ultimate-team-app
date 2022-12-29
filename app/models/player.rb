class Player < ApplicationRecord
    belongs_to :team
    belongs_to :country


  # Validations
  validates_presence_of :name, :age, :image_url, :position, :rating, :club, :price, :pace, :dribbling, :shooting, :defending, :passing, :physical

  validates_uniqueness_of :name, :image_url
end
