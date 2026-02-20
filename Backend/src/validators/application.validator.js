const Joi = require("joi");

const applicationSchema = Joi.object({
  fullName: Joi.string().min(2).max(255).required().messages({
    "string.empty": "Full name is required.",
    "string.min":   "Full name must be at least 2 characters.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please provide a valid email address.",
    "string.empty": "Email is required.",
  }),
  phone: Joi.string().max(50).allow("", null).optional(),
  gender: Joi.string().valid("Male", "Female", "Other").allow("", null).optional(),
  region: Joi.string()
    .valid("Nairobi", "Kisumu", "Kakamega", "Kericho", "Mombasa")
    .allow("", null)
    .optional(),
  memberType: Joi.string()
    .valid("Individual", "Organization/Group")
    .allow("", null)
    .optional(),
  focusAreas: Joi.array()
    .items(
      Joi.string().valid(
        "Spiritual Empowerment",
        "Ecumenicalism",
        "Agribusiness",
        "Humanitarian Support",
        "Education",
        "Socioeconomic Activities",
        "Capacity Building",
        "Peace and Reconciliation",
        "Supporting Persons with Disabilities",
        "Environmental Sustainability"
      )
    )
    .optional(),
});

module.exports = { applicationSchema };
