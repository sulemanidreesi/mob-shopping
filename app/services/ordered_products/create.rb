# frozen_string_literal: true

class OrderedProducts::Create
  attr_reader :products, :order_id

  def initialize(products, order_id)
    @products = products
    @order_id = order_id
  end

  def call
    products.each do |p|
      data = {
        product_name: p[:name],
        product_price: p[:price],
        product_description: p[:description],
        order_id: order_id
      }
      OrderedProduct.create(data)
    end
  end
end
