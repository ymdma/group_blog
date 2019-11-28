class PostsController < ApplicationController


  def index
    if user_signed_in?
      # 投稿一覧表示
      @posts = Post.all.order("created_at DESC")
        # @groups = Group.all.order("created_at DESC")

      #  投稿フォーム用にインスタンスを用意
      @post = Post.new

      #  新規グループ作成時、ユーザーの名前の表示
      @namelist = User.where.not(id:current_user.id)

      #  投稿フォーム用にインスタンスを用意
      @group = Group.new



      #  グループボタンを押してPostの表示範囲を指定
      if params[:group]  == nil

      else
        if params[:group] == "all"

          @user_posts = Post.where(user_id:current_user.id)
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
            query = "select posts.id,title,content,image,users.name,posts.created_at,group_id from posts join users on posts.user_id = users.id"
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

  # indexの記述 + 投稿用の記述
  def post
    if user_signed_in?
      # 投稿一覧表示
      @posts = Post.all.order("created_at DESC")
        # @groups = Group.all.order("created_at DESC")

      #  投稿フォーム用にインスタンスを用意
      @group = Group.new

      #  新規グループ作成時、ユーザーの名前の表示
      @namelist = User.where.not(id:current_user.id)

      # postアクション用記述
      @post = Post.new(
        title: post_params[:title],
        content: post_params[:content],
        image: post_params[:image],
        group_id: post_params[:group_id],
        user_id: current_user.id
      )
      @post.save

        if @post.save
          # ********renderでできないものか***********
          redirect_to root_path, flash:{group_create: "投稿に成功しました"}
        else
          flash[:post_alert] = "投稿に失敗しました"
          render action: :index
          # flash[:post_title_blank] = "タイトルを入力して下さい"
          # flash[:post_text_blank] = "本文を入力して下さい"
        end


      #  グループボタンを押してPostの表示範囲を指定
      if params[:group]  == nil

      else
        if params[:group] == "all"

          @user_posts = Post.where(user_id:current_user.id)
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
            query = "select posts.id,title,content,image,users.name,posts.created_at,group_id from posts join users on posts.user_id = users.id"
          ggg = Post.find_by_sql(query)
          # fff = User.find_by_sql(query)
          @group_posts = ggg.select{|a| a.group_id == group_name.id}

          binding.pry
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


  # ポストアクション内でリロードされた時の対策をしたい
  # 「/posts/posts/post内でリロードされたら」→失敗
  # if request.path_info != session[:ref]    # フォームに入力エラーがあった場合の処理
  #   # session[:ref] = request.path_info
  #   session[:ref] = request.path_info
  # else      # posts/post/potsでリロードされたらエラーになるのでredirect
  #   redirect_to root_path
  # end



  def show
    @post = Post.find(params[:id])
  end

  def destroy

  end



  private

  def post_params
    params.require(:post).permit(
      [:title],
      [:content],
      [:image],
      [:group_id]
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
