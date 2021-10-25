class HomeController < ApplicationController
  def index
    render inertia: 'Home/Index',
           props: {
             message: 'Hi'
           }
  end
end
