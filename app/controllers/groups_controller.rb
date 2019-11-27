class GroupsController < ApplicationController


  def new
    @group = Group.new
  end

  def create
    # group_params[:user_ids].shift()
    @group = Group.new(group_params)
    @group.users << current_user
    @group.save

    if @group.save
    redirect_to root_path, flash:{group_create: "グループを作成しました"}
    else
    end
    
      # flash[:group_create_error] = "グループ名を入力して下さい"
      # redirect_to root_path, flash:{group_create_error: "作成に失敗しました"}
      # render controller: :post action: :index
    # end
  end


  def destroy
    @group = Group.find(params[:id])
    @group.destroy

    redirect_to root_path, flash:{group_delete: "グループを削除しました"}
    # if @group.destroy
    # else
      # redirect_to root_path, flash:{group_delete: "グループを削除できませんでした"}
    # end
    # post = post.find(params[:id])
    # # if post.user_id == current_user.id
    # # end
  end

  private

  def group_params
    params['group']['user_ids'].shift
    correct_user_ids = params['group']['user_ids']
    params.require(:group).permit(:name,:group_name).merge(user_ids: correct_user_ids)
  end

end
