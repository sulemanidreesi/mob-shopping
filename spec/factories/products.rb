# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string
#  price       :integer
#  quantity    :integer
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :product do
    # image { Faker::Avatar.image(slug: 'my-own-slug', size: '50x50') }
    name { Faker::Device.model_name }
    price { Faker::Number.number(digits: 3) }
    quantity { Faker::Number.number(digits: 2) }
    description { Faker::Lorem.paragraph(sentence_count: 4) }

    after(:build) do |product|
      image = File.open(Rails.root.join('spec', 'fixtures', 'product.png'))
      product.image.attach(
        io: image,
        filename: 'product.png',
        content_type: 'image/png'
      )
    end
  end
end
