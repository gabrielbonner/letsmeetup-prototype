class DashboardController < ApplicationController
  def index
    @timeslots = Timeslot.all.sort { |a, b| a.start <=> b.start }
  end
end
