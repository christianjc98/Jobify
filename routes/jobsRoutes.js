import express from "express";
const router = express.Router();

import {
  getAllJobs,
  updateJob,
  createJob,
  showStats,
  deleteJob,
} from "../controllers/jobsController.js";
import testUser from "../middleware/test-user.js";

router.route("/").get(getAllJobs).post(testUser, createJob);
//:id at last route
router.route("/stats").get(showStats);
router.route("/:id").delete(testUser, deleteJob).patch(testUser, updateJob);

export default router;
