class PostsController < ApplicationController

  # before_action :authenticate_user!

  def index
    if user_signed_in?
      # 投稿一覧表示
      @posts = Post.all.order("created_at DESC")

      #  投稿フォーム用にインスタンスを用意
      @post = Post.new
      #  投稿フォーム用にインスタンスを用意
      @group = Group.new
      # binding.pry
      #  ユーザーが削除可能なグループリスト
      @del_groups_list = Group.where(admin:current_user.id)

      #  新規グループ作成時、ユーザーの名前の表示
      # @name_list = User.where.not(id:current_user.id)


      #  グループボタンを押してPostの表示範囲を指定
      if params[:group]  == nil

      else
        if params[:group] == "all"

          @user_posts = Post.where(user_id:current_user.id).order("updated_at DESC")

          # render json: @user_posts

          respond_to do |format|
            format.html{redirect_to root_path}
            format.json
          end

        elsif params[:group] != "all"
          group_name = Group.find_by(group_name: params[:group])
          # @group_posts = Post.where(group_id: group_name.id)
            # 1
          # query = "select * from posts join users on posts.user_id = users.id"
          query = "select posts.id,title,content,image,users.name,posts.updated_at,group_id from posts join users on posts.user_id = users.id order by posts.updated_at DESC"
          ggg = Post.find_by_sql(query)
          @group_posts = ggg.select{|a| a.group_id == group_name.id}
          # binding.pry
          respond_to do |format|
            format.html{redirect_to root_path}
            format.json
            # render json: @group_posts
          end
        end
      end
    else
    end
  end


  # indexの記述 + 投稿用の記述
  def create
    if user_signed_in?
      # 投稿一覧表示
      @posts = Post.all.order("created_at DESC")

      #  投稿フォーム用にインスタンスを用意
      @post = Post.new
      #  投稿フォーム用にインスタンスを用意
      @group = Group.new
      # binding.pry
      #  ユーザーが削除可能なグループリスト
      @del_groups_list = Group.where(admin:current_user.id)

      #  新規グループ作成時、ユーザーの名前の表示
      # @name_list = User.where.not(id:current_user.id)

      # createアクション用記述
      # binding.pry
      @post = Post.new(
        title: post_params[:title],
        content: post_params[:content],
        image: post_params[:image],
        group_id: post_params[:group_id],
        user_id: current_user.id
      )
      # @post.save

        if @post.save

          redirect_to root_path, flash:{group_create: "投稿に成功しました"}
        else
          # binding.pry
          render "posts/index"

        end


      #  グループボタンを押してPostの表示範囲を指定
      if params[:group]  == nil

      else
        if params[:group] == "all"

          @user_posts = Post.where(user_id:current_user.id).order("updated_at DESC")
          # binding.pry
          # render json: @user_posts

          respond_to do |format|
            format.html{redirect_to root_path}
            format.json
          end

        elsif params[:group] != "all"
          group_name = Group.find_by(group_name: params[:group])
          # @group_posts = Post.where(group_id: group_name.id)

            # 1
          # query = "select * from posts join users on posts.user_id = users.id"
          query = "select posts.id,title,content,image,users.name,posts.updated_at,group_id from posts join users on posts.user_id = users.id order by posts.updated_at DESC"
          ggg = Post.find_by_sql(query)
          # fff = User.find_by_sql(query)
          @group_posts = ggg.select{|a| a.group_id == group_name.id}

          # binding.pry
          respond_to do |format|
            format.html{redirect_to root_path}
            format.json
          end
          # render json: @group_posts
        end
      end
    else
    end
  end



  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end


  def update
    # @post = Post.new
    post = Post.find(params[:id])
    if params[:remove_image].present?
      post.remove_image!
    end
    if post.user_id == current_user.id
      post.update(post_params)
      redirect_to action: :show
    end
  end


  def destroy
    @post = Post.find_by(id: params[:id])
    if @post.destroy
      redirect_to root_path, status:301, flash:{group_delete: "投稿を削除しました"}
    end
  end


  private


  def post_params
    # binding.pry
    params.require(:post).permit(
      [:title],
      [:content],
      [:image],
      [:group_id],
      [:remove_image]
    )
  end

  # # インデックスにログインフォームを設置するため、必要な値を渡すための記述
  # # UsersControllerにてログイン用のアクションを作ったため、不要に。
  # def resource_name
  #   :user
  # end
  # helper_method :resource_name

  # def resource
  #   @resource ||= User.new
  # end
  # helper_method :resource

  # def devise_mapping
  #   @devise_mapping ||= Devise.mappings[:user]
  # end
  # helper_method :devise_mapping

  # def resource_class
  #   User
  # end
  # helper_method :resource_class



end
