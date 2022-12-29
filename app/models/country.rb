class Country < ApplicationRecord
    has_many :players
    has_many :teams, through: :players

    # Validations
    validates_presence_of :name, :image_url
    validates_uniqueness_of :name, :image_url
end
