class Image < ApplicationRecord
  belongs_to :folder
  has_many_attached :images
end
