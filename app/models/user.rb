class User < ApplicationRecord
    has_many :teams

    # Macro method 
    has_secure_password 
end
