# == Schema Information
#
# Table name: ordered_products
#
#  id                  :bigint           not null, primary key
#  product_name        :string
#  product_price       :integer
#  product_description :string
#  order_id            :bigint
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class OrderedProduct < ApplicationRecord
  belongs_to :order
end
