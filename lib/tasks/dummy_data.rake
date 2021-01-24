# frozen_string_literal: true

require 'csv'

namespace :dummy_data do
  desc 'Create dummy data'
  task create: :environment do
    p = PowerBar.new
    p.settings.tty.finite.show_eta = true

    FactoryBot.create_list :product, 30

    total = Product.count
    Product.all.each_with_index do |_product, index|
      print_progress(p, 'creating products', index, total)
    end

    p.close(true)
  end

  desc 'Truncate all existing data'
  task truncate: 'db:load_config' do
    truncate_database
    puts "\nAll data is truncated"
  end

  def truncate_database
    return if Rails.env.production?

    DatabaseCleaner.clean_with :truncation
  end

  def print_progress(p, msg, done, total)
    p.show({ msg: msg, done: done, total: total })
  end
end
