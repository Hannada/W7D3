json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type, :image_url
    
end

json.items do
  @poke.items.each do |item|
    json.extract! item, :pokemon_id, :name, :price, :happiness, :image_url
  end
end



