require 'sinatra'

set :public, 'highballr.safariextension'

get '/' do
  send_file('highballr.safariextension/highballr.html')
end

run Sinatra::Application
