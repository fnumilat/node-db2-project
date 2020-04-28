
exports.seed = async function(knex) {
  await knex("cars").truncate()
  await knex("cars").insert([
    { vin: "A135236525", make: "Toyota", model: "Camry", mileage: "25555.05" },
    { vin: "B14253265", make: "Ford", model: "EcoSport", mileage: "23562.10" },
    { vin: "CD1235366", make: "Chevrolet", model: "Colorado", mileage: "4.12" },
    { vin: "OP953232", make: "Dodge",  model: "Journey", mileage: "25555.13" },
  ])
}
