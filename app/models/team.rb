class Team < ApplicationRecord
    belongs_to :user 
    has_many :players
    has_many :countries, through: :players
   
    validates_presence_of :name
    validates_uniqueness_of :name
end
