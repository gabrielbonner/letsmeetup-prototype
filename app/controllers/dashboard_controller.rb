class DashboardController < ApplicationController
  def index
    @timeslots = Timeslot.all
  end
end
