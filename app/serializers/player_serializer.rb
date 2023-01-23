class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :image_url, :position, :rating, :club, :price, :pace, :dribbling, :shooting, :defending, :passing, :physical, :team_id, :country_id
end
