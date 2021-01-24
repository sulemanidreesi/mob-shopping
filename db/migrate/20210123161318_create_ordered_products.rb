class CreateOrderedProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :ordered_products do |t|
      t.string :product_name
      t.integer :product_price
      t.string :product_description
      t.references :order, null: true, foreign_key: true

      t.timestamps
    end
  end
end
