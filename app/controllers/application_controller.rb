class ApplicationController < ActionController::Base

  def after_sign_in_path_for(resource)
    root_path
  end

  def after_sign_out_path_for(resource)
    root_path
  end

  def index
    if user_signed_in?
      # 投稿一覧表示
      @posts = Post.all.order("created_at DESC")
        # @groups = Group.all.order("created_at DESC")

      #  投稿フォーム用にインスタンスを用意
      @post = Post.new

      #  新規グループ作成時、ユーザーの名前の表示
      # @name_list = User.where.not(id:current_user.id)

      #  投稿フォーム用にインスタンスを用意
      @group = Group.new

      #  グループボタンを押してPostの表示範囲を指定
      if params[:group]  == nil

      else
        if params[:group] == "all"

          @user_posts = Post.where(user_id:current_user.id)

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
          @group_posts = ggg.select{|a| a.group_id == group_name.id}

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



end
