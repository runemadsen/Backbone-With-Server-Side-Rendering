require 'rubygems'
require 'bundler'
Bundler.require

DataMapper.setup(:default, "yaml:db")

class Car
  include DataMapper::Resource   
  property :id,         Serial    
  property :running,      Boolean    
  property :on_message,     String
  property :off_message,    String
end

class Application < Sinatra::Base
   
  get '/' do   
    @cars = Car.all 
    erb :modeltest
  end
  
end