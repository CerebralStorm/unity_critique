class ShowPiece < ApplicationRecord
  belongs_to :user

  has_many :show_piece_categories
  has_many :categories, through: :show_piece_categories
end
