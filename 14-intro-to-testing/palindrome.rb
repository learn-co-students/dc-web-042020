


class PalindromeChecker

    def is_palindrome?(orig_word)

        # (0..word.length / 2).each do |index|
        #     if word[index] == word[word.length - index - 1]
        #         pass
        #     else 
        #         return false
        #     end
        # end
        # return true
        begin
            raise TypeError if !(orig_word.is_a? String)
            
            orig_word.downcase!
        rescue TypeError 
            puts "Please enter a valid string"
            return
        rescue NoMethodError
            puts "there is no downcase method"
            return

        end

        word = word_sanitizer(orig_word)
        if word.length <= 1
            return true 
        else
            if word[0] == word[-1]
                return is_palindrome?(word[1...-1])
            else
                return false
            end
        end

    end

    def word_sanitizer(word)
        # code to clean words 
        word.downcase!
        word.gsub!(/[^0-9a-z]/, "")
        # word = word.downcase
        return word

    end

end




checker = PalindromeChecker.new
# puts(checker.is_palindrome?("banana") == false)
# puts(checker.is_palindrome?("abba") == true)
# puts(checker.is_palindrome?("mom") == true)
# puts(checker.is_palindrome?("Mom") == false)
# puts(checker.is_palindrome?("abb a") == false)
# puts(checker.is_palindrome?("sama's") == false)
checker.is_palindrome?(true)
# class Person

#     def name
#         self.name
#     end

# end