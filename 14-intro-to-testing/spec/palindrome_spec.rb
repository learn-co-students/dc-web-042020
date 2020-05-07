require_relative "../palindrome.rb"


# to be compares object identity equality
# to eq compares value equality

describe "PalindromeChecker" do 

    let (:checker) {PalindromeChecker.new}
    # checker = PalindromeChecker.new

    it "returns true when input is 'dad'" do 
        expect(checker.is_palindrome?('dad')).to be(true)
    end

    it "returns false when input is 'banana'" do 
        expect(checker.is_palindrome?('banana')).to be(false)
        # checker = "blah"
    end

    it "can add numbers" do 
        expect(2+2).to eq(4)
    end

    it "ignores case sensitivity" do 
        expect(checker.is_palindrome?('Tacocat')).to be(true)
    end

    it "ignores spaces" do 
        expect(checker.is_palindrome?("taco cat")).to be(true)
    end

    it "ignores punctuation" do 
        expect(checker.is_palindrome?('taco?cat!')).to be(true)
    end

    it "raises an TypeError when input is not a string" do 
        expect{checker.is_palindrome?(1234)}.to raise_error TypeError

    end
    # it "thinks two strings have 'to be' object identity equality " do
    #     x = "hello"
    #     y = "hello"
    #     expect(x).to be(y)

    # end

    # it "thinks two strings have 'to eq' value  equality " do
    #     x = "hello"
    #     y = "hello"
    #     expect(x).to eq(y)
    # end


end