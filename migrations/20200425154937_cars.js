
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (carsTable) => {
    carsTable.increments("id")
    carsTable.string("vin").notNull().unique()
    carsTable.text("make").notNull()
    carsTable.text("model").notNull()
    carsTable.float("mileage").notNull()
  })
};

exports.down = function(knex) {
  await knex.schema.dropTableIfExist("cars")
};
