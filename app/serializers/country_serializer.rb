class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url

  has_many :players
  has_many :teams, through: :players
end
