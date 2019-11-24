class GroupsController < ApplicationController


  def new
    @group = Group.new
    @group.users << current_user
    
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end


  def destroy
    @group = Group.find(params[:id])
      @group.destroy
    # binding.pry 
    # post = post.find(params[:id])
    # # if post.user_id == current_user.id
    # # end
    redirect_to root_path
  end

  private

  def group_params
    params.require(:group).permit(:name,:group_name, user_ids: [] )
  end

end
