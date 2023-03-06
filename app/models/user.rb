class User < ApplicationRecord
    has_many :teams

    has_secure_password 

    validates_presence_of :email, :password, :first_name, :last_name
    validates_uniqueness_of :email
end
