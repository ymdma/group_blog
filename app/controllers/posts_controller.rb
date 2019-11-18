class PostsController < ApplicationController


  def index
    # 投稿一覧表示
    @posts = Post.all.order("created_at DESC")
    @groups = Group.all.order("created_at DESC")
    
#  投稿フォーム用にインスタンスを用意
    @post = Post.new
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


  def resource_name
    :user
  end
  helper_method :resource_name

  def resource
    @resource ||= User.new
  end
  helper_method :resource

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end
  helper_method :devise_mapping

  def resource_class
    User
  end
  helper_method :resource_class
end
