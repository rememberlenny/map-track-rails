class PagesController < ApplicationController
  def home
    if user_signed_in?
      redirect_to user_path(current_user.id)
    end
  end

  def about
  end

  def contact
  end

  def privacy
  end

  def download
  end

  def map_high
  end

  def pay
  end
end
