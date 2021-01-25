class FoldersController < ApplicationController
    def index
        folders = Folder.all
        render json: folders
    end

    def show
        folder = Folder.find_by(id: params[:id])
        render json: folder
    end
end
