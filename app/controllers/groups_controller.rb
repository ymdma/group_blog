class GroupsController < ApplicationController


  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    @group.users << current_user

    if @group.save
      redirect_to root_path, flash:{group_create: "グループを作成しました"}
    else
      # redirect_to root_path, flash:{group_create_error: "作成に失敗しました"}
      flash[:group_name_blank] = "グループ名を入力して下さい"
      render '/posts/index' unless @group.valid?
    end
  end


  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    if @group.destroy
      redirect_to root_path, flash:{group_delete: "グループを削除しました"}
    end
    # post = post.find(params[:id])
    # # if post.user_id == current_user.id
    # # end
  end

  private

  def group_params
    params.require(:group).permit(:name,:group_name, user_ids: [] )
  end

end
