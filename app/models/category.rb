class Category < ApplicationRecord

  has_many :show_piece_categories
  has_many :show_pieces, through: :show_piece_categories

end
