Rails.application.routes.draw do

  wash_out :qbwc

  get '/qbwc/qwc', to: 'qbwc#qwc', as: 'qwc'
  get '/qbwc/action' => 'qbwc#_generate_wsdl'
  get '/qbwc/add_form' => 'requests#qbwc_add_form'

  resources :company, only: [] do
    resources :vendors, only: [:index]
  end

  root 'static#index'

end
