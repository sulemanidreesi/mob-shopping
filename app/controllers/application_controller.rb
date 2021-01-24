# frozen_string_literal: true

class ApplicationController < ActionController::Base
  helper_method :current_user

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    else
      @current_user = nil
    end
  end

  private

  def require_login
    unless current_user
      flash[:error] = 'You must be logged in to access this section'
      redirect_to login_path
    end
  end
end
