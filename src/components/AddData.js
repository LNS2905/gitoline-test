import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      img: "",
      price: "",
      year: "",
    },

    onSubmit: (values) => {
      try {
        axios.post("https://6531ff574d4c2e3f333d78e7.mockapi.io/Films", {
          id: values.id,
          name: values.name,
          img: values.img,
          price: values.price,
          year: values.year,
        });
        alert("Add thành công");
        navigate("/dashboard");
      } catch (error) {
        console.log("Error Adding Film", error);
      }
    }
  });

  return (
    <>
      <div
        className="form"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form
        rules={[
          {
            required: true,
            message: 'Please input information!',
          },
        ]}
          onSubmit={formik.handleSubmit}
          style={{
            flexDirection: "column",
            display: "flex",
            width: "40%",
            border: "1px solid black",
            padding: "20px",
          }}
        >
          <div style={{ position: "relative", marginBottom: "26px" }}>
            <TextField
              label="Name Of Film"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              style={{ width: "100%" }}
            />
            <div style={{ position: "absolute" }}>
              {formik.errors.name && (
                <Typography variant="caption" color="red">
                  {formik.errors.name}
                </Typography>
              )}
            </div>
          </div>

          <div style={{ position: "relative", marginBottom: "26px" }}>
            <TextField
              label="Year"
              name="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              style={{ width: "100%" }}
            />
            <div style={{ position: "absolute" }}>
              {formik.errors.year && (
                <Typography variant="caption" color="red">
                  {formik.errors.year}
                </Typography>
              )}
            </div>
          </div>

          <div style={{ position: "relative", marginBottom: "26px" }}>
            <TextField
              label="Poster Link"
              name="img"
              value={formik.values.img}
              onChange={formik.handleChange}
              style={{ width: "100%" }}
            />
            <div style={{ position: "absolute" }}>
              {formik.errors.img && (
                <Typography variant="caption" color="red">
                  {formik.errors.img}
                </Typography>
              )}
            </div>
          </div>

          <div style={{ position: "relative", marginBottom: "26px" }}>
            <TextField
              label="Price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              style={{ width: "100%" }}
            />
            <div style={{ position: "absolute" }}>
              {formik.errors.price && (
                <Typography variant="caption" color="red">
                  {formik.errors.price}
                </Typography>
              )}
            </div>
          </div>
          <Button
            type="submit"
            style={{ border: "1px solid #e8f0fe", backgroundColor: "#e8f0fe" }}
          >
            Add Film
          </Button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default AddForm;
