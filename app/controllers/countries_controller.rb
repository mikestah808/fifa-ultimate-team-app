class CountriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    skip_before_action :authorized

    def index
        countries = Country.all
        render json: countries
    end

    def show 
        country = Country.find_by(id: params[:id])
        if country 
            render json: country
        else 
            render json: { error: "Country not found" }, status: :not_found
        end
    end

    def create
        country = Country.find_or_create_by!(country_params)
        render json: country, status: :created
        rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        country = Country.find_by(id: params[:id])
        country.destroy
        head :no_content
    end


    private

    def country_params
        params.permit(:name, :image_url)
    end

    def render_not_found_response
        render json: { error: "Genre not found" }, status: :not_found
    end

end
