class PostsController < ApplicationController


  def index
    @posts = Post.all.order("created_at DESC")
    # @posts = Post.all
  end

end
