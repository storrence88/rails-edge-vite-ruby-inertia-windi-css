class ApplicationController < ActionController::Base
  # TODO: Remove once https://github.com/inertiajs/inertia-rails/pull/72 is merged and fixed
  # Should be "if" instead of "unless"
  after_action do
    # Axios by default looks for an XSRF-TOKEN cookie to use for POST requests
    cookies['XSRF-TOKEN'] = form_authenticity_token if request.inertia?
  end
end
