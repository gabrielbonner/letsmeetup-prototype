class CreateTimeslots < ActiveRecord::Migration[5.1]
  def change
    create_table :timeslots do |t|
      t.timestamp :start
      t.timestamp :finish

      t.timestamps
    end
  end
end
