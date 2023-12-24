const Joi = require('joi');

// thumbnail: Joi.string().required().trim(),
// TODO: add array maxSize: 10
// images: Joi.array().items(Joi.string().trim()),

const addProductValidationSchema = Joi.object({
	category: Joi.string().required(),
	subcategory: Joi.string().required(),
	name: Joi.string().required().trim(),
	price: Joi.number().required(),
	quantity: Joi.number(),
	publisher: Joi.string().required().trim(),
	writer: Joi.string().required().trim(),
	description: Joi.string().required().trim(),
	rating: Joi.string().required().trim()
});

const editProductValidationSchema = Joi.object({
	category: Joi.string(),
	subcategory: Joi.string(),
	name: Joi.string().trim(),
	price: Joi.number(),
	quantity: Joi.number(),
	publisher: Joi.string().trim(),
	writer: Joi.string().trim(),
	description: Joi.string().trim(),
	rating: Joi.string().trim()
});

module.exports = { addProductValidationSchema, editProductValidationSchema };
