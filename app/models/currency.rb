require 'byebug'

class Currency < ApplicationRecord
    def calculate_value(amount)
        (current_price.to_f * amount.to_f).round(4)
    end

    def current_price
        # url = 'https://api.coinmarketcap.com/v1/ticker/'
        # request = HTTParty.get(url + self.slug)
        # response = JSON.parse(request.body)
        
        url = 'https://api.coinbase.com/v2/prices/' + self.currency_symbol + '/spot'
        request = HTTParty.get(url)
        response = request["data"]["amount"]
    end
end
