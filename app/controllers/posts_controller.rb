class PostsController < ApplicationController


  def index
        # 投稿一覧表示
      @posts = Post.all.order("created_at DESC")
      # @groups = Group.all.order("created_at DESC")

  #  投稿フォーム用にインスタンスを用意
      @post = Post.new

  #  投稿フォーム用にインスタンスを用意
      @group = Group.new
      @namelist = User.where.not(id:current_user.id)

      if params[:group]  == nil
      else
        if params[:group] == "all"
        # binding.pry
          # user_groups = current_user.groups.all
          # @group_posts = Post.where(group_id:user_groups)

          @user_posts = Post.where(user_id:current_user.id)

          # binding.pry
          render json: @user_posts

        elsif params[:group] != "all"
          group_name = Group.find_by(group_name: params[:group])
          # @group_posts = Post.where(group_id: group_name.id)

          query = "select * from posts join users on posts.user_id = users.id"
          ggg = Post.find_by_sql(query)
          @group_posts = ggg.select{|a| a.group_id == group_name.id}

          render json: @group_posts
        end
      end
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
