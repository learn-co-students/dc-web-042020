class Author < ActiveRecord::Base
   
    def last_name 
        self.name.split(" ")[-1]
    end 

    # def find_by_name(name)
    #     Author.all.find do |author|
    #         author.name == name 
    #     end
    # end
end