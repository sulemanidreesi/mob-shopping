# frozen_string_literal: true

module Api
  module V1
    class ProductsController < ApplicationController
      def index
        @products = Product.all
        render json: @products, each_serializer: ProductSerializer
      end
    end
  end
end
