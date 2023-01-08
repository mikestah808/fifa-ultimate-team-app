class TeamSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name

  has_many :players
end
