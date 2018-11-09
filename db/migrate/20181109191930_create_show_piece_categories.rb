class CreateShowPieceCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :show_piece_categories do |t|
      t.bigint :show_piece_id, index: true
      t.bigint :category_id, index: true

      t.timestamps
    end
    add_index :show_piece_categories, [:show_piece_id, :category_id]
  end
end
