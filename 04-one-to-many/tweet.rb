class Tweet

    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    def self.all 
        @@all 
    end

    # def user
    #     return @user
    # end

    def username
        return self.user.username
    end
end

