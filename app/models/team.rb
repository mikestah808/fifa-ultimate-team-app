class Team < ApplicationRecord
    belongs_to :user 
    has_many :players
    has_many :countries, through: :players
end
