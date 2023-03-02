import express from "express";
import {
    createPatient,
    getAllPatients,
    updatePatient,
    deletePatient,
} from "../controllers/patients.js";

const router = express.Router();

router.post("/create", createPatient);
router.get("/read", getAllPatients);
router.patch("/update/:id", updatePatient);
router.delete("/delete/:id", deletePatient);

export default router;