# frozen_string_literal: true

module Api
  module V1
    class OrdersController < ApplicationController
      skip_before_action :verify_authenticity_token

      def create
        ::Orders::Create.new(params[:products], permitted_params[:user_id]).call if params[:products].present?
        render json: { success: true, message: 'Order is placed' }
      end

      private

      def permitted_params
        params.require(:order).permit(
          :user_id,
          :products
        )
      end
    end
  end
end
