# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string
#  price       :integer
#  quantity    :integer
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class ProductSerializer < ActiveModel::Serializer
  attributes  :id,
              :name,
              :price,
              :quantity,
              :description
end
