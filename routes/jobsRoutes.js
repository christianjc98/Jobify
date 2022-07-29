import express from "express";
const router = express.Router();

import {
  getAllJobs,
  updateJob,
  createJob,
  showStats,
  deleteJob,
} from "../controllers/jobsController.js";

router.route("/").get(getAllJobs).post(createJob);
//:id at last route
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

export default router;
