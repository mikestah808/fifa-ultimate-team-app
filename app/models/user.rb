class User < ApplicationRecord
    has_many :teams

    # Macro method 
    has_secure_password 

    # Validations 
    validates_presence_of :email, :password, :first_name, :last_name
    validates_uniqueness_of :email
end
