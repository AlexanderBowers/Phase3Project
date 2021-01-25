class ImagesController < ApplicationController
    def index
        images = Image.all
        render json: images
    end

    def show
        image = Image.find_by(id: params[:id])
        render json: image
    end
    def create
        image = Image.new
        image.name = 'test'
        image.folder_id = 1
        byebug
    end


end
