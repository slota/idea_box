class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.order(created_at: :desc)
  end

  def show
    respond_with Idea.find_by(id: params[:id])
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def update
    idea = Idea.find_by(id: params[:id])
    respond_with idea.update(idea_params)
  end

  def destroy
    respond_with Idea.delete(params[:id])
  end

  private

  def idea_params
    params.require(:post).permit(:name, :description, :quality)
  end
end
