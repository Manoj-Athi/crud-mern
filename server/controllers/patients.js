import mongoose from "mongoose"
import Patient from "../models/Patient.js"

export const createPatient = async (req, res) => {
    const { name, email, street, city, state, zip , phone } = req.body;
    try {
        const patientRecord = await Patient.create({ name, email, phoneNo: phone, address: {street, city, state, pincode: zip} });
        if(!patientRecord){
            throw new Error("Unable to create a patient");
        }
        res.status(200).json({
            message: "Created a patient detail",
            status: "SUCCESS",
            data: patientRecord
        });
    } catch (error) {
        console.log(error);
        res.status(409).json({
            message: error.message,
            status: "ERROR",
        });
    }
}

export const getAllPatients = async (req, res) => {
    try {
        const allPatientsRecord = await Patient.find();
        if(!allPatientsRecord){
            throw new Error("Unable to fetch all patients details");
        }
        res.status(200).json({
            message: "fetched all patients details",
            status: "SUCCESS",
            data: allPatientsRecord
        });
    } catch (error) {
        console.log(error);
        res.status(409).json({
            message: error.message,
            status: "ERROR",
        });
    }
}

export const updatePatient = async (req, res) => {
    const {id: _id} = req.params;
    const { values } = req.body;
    console.log(values)
    try {
        const update = await Patient.updateOne(
            { _id },
            values
        );
        console.log(update)
        if(!update){
            throw new Error("Unable to update patient details");
        }
        const updatedPatient = await Patient.findOne({ _id });
        if(!updatePatient){
            throw new Error("Unable to fetch the updated patient details");
        }
        res.status(200).json({
            message: "Updated patient details",
            status: "SUCCESS",
            data: updatedPatient
        });
    } catch (error) {
        console.log(error);
        res.status(409).json({
            message: error.message,
            status: "ERROR",
        });
    }
}

export const deletePatient = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Record unavailable");
    }
    try {
        const data = await Patient.findByIdAndRemove(_id);
        // console.log(data);
        if(data){
            res.status(200).json({
                message: "Successfully deleted",
                status: "SUCCESS",
            });
        }
    } catch (error) {
        res.status(404).json({
            message: error.message,
            status: "ERROR",
        });
    }
}