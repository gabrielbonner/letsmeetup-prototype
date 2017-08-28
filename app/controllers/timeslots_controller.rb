class TimeslotsController < ApplicationController
    def new
    end

    def create
      @timeslot = Timeslot.new(params.require(:timeslot).permit(:date, :startTime, :endTime))

      @timeslot.save
      redirect_to dashboard_index_url
    end
end
