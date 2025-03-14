import City from "../models/City.js";
import Restaurant from "../models/restaurant.js";
import ExtendedError from "../utils/ExtendedError.js";

export const getCity = async (req, res) => {
  const cities = await City.findAll({ model: Restaurant, as: "restaurants" });
  res.json(cities);
};

export const createCity = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    throw new ExtendedError(400, "City name is required");
  }

  const found = await City.findOne({ where: { name } });
  if (found) {
    throw new ExtendedError(400, "City with that name already exists");
}
  const city = await City.create({ name });

  res.json(city);
};

export const getCityById = async (req, res) => {
  const { id } = req.params;
  const city = await City.findByPk(id, { model: Restaurant, as: "restaurants" });
  if (!city) {
    throw new ExtendedError(404, "City not found");
  }
  res.json(city);
}

export const updateCity = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    if (!name) {
      throw new ExtendedError(400, "City name is required");
    }

    const city = await City.findByPk(id);
    if (!city) {
      throw new ExtendedError(404, "City not found");
    }
    await city.update(req.body);

    res.json(city);
}

export const deleteCity = async (req, res) => {
  const { id } = req.params;
  const city = await City.findByPk(id);
  if (!city) {
    throw new ExtendedError(404, "City not found");
  }
  await city.destroy();
  res.json({ message: "City deleted" });
}
