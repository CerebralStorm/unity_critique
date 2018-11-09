class CreateShowPieces < ActiveRecord::Migration[5.2]
  def change
    create_table :show_pieces do |t|
      t.string :title
      t.string :description
      t.bigint :user_id

      t.timestamps
    end
  end
end
