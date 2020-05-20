class Snack < ApplicationRecord
    belongs_to :retailer, optional: true
    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validates :calories, presence: true, numericality: true
    validates :deliciousness, presence: true
end
