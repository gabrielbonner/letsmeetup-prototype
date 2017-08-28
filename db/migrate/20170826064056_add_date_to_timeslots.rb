class AddDateToTimeslots < ActiveRecord::Migration[5.1]
  def change
    add_column :timeslots, :date, :string
    add_column :timeslots, :startTime, :string
    add_column :timeslots, :endTime, :string
    remove_column :timeslots, :start, :timestamp
    remove_column :timeslots, :finish, :timestamp
  end
end
