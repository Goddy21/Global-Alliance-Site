const { Router } = require("express");
const { submitApplication, listApplications } = require("../controllers/application.controller");
const validate = require("../middleware/validate");
const { applicationSchema } = require("../validators/application.validator");

const router = Router();

router.post("/", validate(applicationSchema), submitApplication);
router.get("/", listApplications);

module.exports = router;