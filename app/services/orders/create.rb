# frozen_string_literal: true

class Orders::Create
  attr_reader :products, :user_id

  def initialize(products, user_id)
    @products = products
    @user_id = user_id
  end

  def call
    order = Order.new(user_id: user_id)
    order.save
    ::OrderedProducts::Create.new(products, order.id).call if order.valid?
  end
end
