class AddUsersToTimeslots < ActiveRecord::Migration[5.1]
  def change
    add_column :timeslots, :fiona, :string, :default => "white"
    add_column :timeslots, :gabriel, :string, :default => "white"
    add_column :timeslots, :jeremy, :string, :default => "white"
    add_column :timeslots, :kevin, :string, :default => "white"
    add_column :timeslots, :kyle, :string, :default => "white"
  end
end
