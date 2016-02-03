Rails.application.routes.draw do

  wash_out :qbwc

  get '/qbwc/qwc', to: 'qbwc#qwc', as: 'qwc'
  get '/qbwc/action' => 'qbwc#_generate_wsdl'
  get '/qbwc/add_form' => 'requests#qbwc_add_form'

  resources :companies, only: [:show, :create] do
    resources :requests, only: [:index]
    resources :vendors, only: [] do
      collection do
        post "query"
      end
    end
  end

  root 'static#index'

end
