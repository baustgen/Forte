class Api::SessionController < ApplicationController

    def create
        @user = User.find_by_credentials(params[user][username], params[user][password])
        if @user
            login(@user)
            render :show
        else
            render json: ['Invalid Username and/or Password'], status: 401
        end
    end

    def destroy
        logout!
        render json: { message: 'Logout successful.' }
    end
end
