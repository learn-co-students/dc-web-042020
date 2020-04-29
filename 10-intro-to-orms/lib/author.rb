class Author

    attr_accessor :name, :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def save
        if self.id
            sql = "UPDATE authors set name = ? WHERE id = ?"
            DB.execute(sql, self.name, self.id)
        else
            sql = """INSERT INTO authors 
                (name) VALUES (?)"""
            DB.execute(sql, self.name)
        end
    end

    def self.create(name)
        new_author = Author.new(name)
        new_author.save
        new_author
    end

    def self.find(id)
        # return the author with that ID
        sql = """
            SELECT * from authors 
            where ID = ?
        """
        row = DB.execute(sql, id)[0]
        # [2, Toni Morrison]
        Author.make_author_from_row(row)
    end

    def self.make_author_from_row(row)
        Author.new(row[1], row[0])
    end



end