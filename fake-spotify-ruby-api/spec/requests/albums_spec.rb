# frozen_string_literal: true

require 'swagger_helper'

describe 'albums' do
  path '/albums' do
    get 'Retrieves all albums' do
      tags 'Albums'
      produces 'application/json'

      response '200', 'get albums' do
        schema type: :object,
               properties: {
                 id: { type: :integer },
                 title: { type: :string },
                 copyright: { type: :string },
                 year: { type: :integer }
               }
        run_test! do |response|
          data = JSON.parse(response.body)
          expect(data['title']).to eq('foo')
        end
      end
    end
  end
end
