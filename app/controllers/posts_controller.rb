class PostsController < ApplicationController


  def index
# for View
    @posts = Post.all.order("created_at DESC")
    @user = current_user.id

    @post = Post.new
# from Form
  end

  def post
    @post = Post.new(
      title: post_params[:title],
      content: post_params[:content],
      image: post_params[:image],
      user_id: current_user.id
    )
    @post.save

    if @post.save
      # reload!
      redirect_to root_path
    else
      flash[:post_alert] = "投稿に失敗しました"
    end
  end
  private

  def post_params
    params.require(:post).permit(
      [:title],
      [:content],
      [:image]
    )
  end
end
