json.array! @guests do |guest|
  #line 11 is a partial for the long list of data types for guest
  json.partial! "guest", guest: guest 
  # json.id guest.id
  # json.name guest.name
  # json.age guest.age
  # json.favorite_color guest.favorite_color
end