class UsersController < ApplicationController
    def index
      @users = User.all
    end

    def new
    end

    def show
      @user = User.find(params[:id])
    end

    def create
      @user = User.new(params.require(:user).permit(:username, :email))

      @user.save
      redirect_to @user
    end
end
