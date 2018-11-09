class ShowPieceCategory < ApplicationRecord
  belongs_to :show_piece
  belongs_to :category
end
