import Tag from "../models/Tag.js";
import Restaurant from "../models/restaurant.js";
import ExtendedError from "../utils/ExtendedError.js";

export const getTags = async (req, res) => {
  const cities = await Tag.findAll({ model: Restaurant, as: "restaurants" });
  res.json(cities);
};

export default getTags;

export const createTag = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    throw new ExtendedError(400, "Tag name is required");
  }

  const found = await Tag.findOne({ where: { name } });
  if (found) {
    throw new ExtendedError(400, "Tag with that name already exists");
}
  const tag = await Tag.create({ name });

  res.json(tag);
};

export const getTagById = async (req, res) => {
  const { id } = req.params;
  const tag = await Tag.findByPk(id, { model: Restaurant, as: "restaurants" });
  if (!tag) {
    throw new ExtendedError(404, "Tag not found");
  }
  res.json(tag);
}

export const updateTag = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    if (!name) {
      throw new ExtendedError(400, "Tag name is required");
    }

    const tag = await Tag.findByPk(id);
    if (!tag) {
      throw new ExtendedError(404, "Tag not found");
    }
    await tag.update(req.body);

    res.json(tag);
}

export const deleteTag = async (req, res) => {
  const { id } = req.params;
  const tag = await Tag.findByPk(id);
  if (!tag) {
    throw new ExtendedError(404, "Tag not found");
  }
  await tag.destroy();
  res.json({ message: "Tag deleted" });
}