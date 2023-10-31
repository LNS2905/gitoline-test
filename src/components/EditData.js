import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditModal() {
  const navigate = useNavigate();
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      name: "",
      year: "",
      price: "",
      img: "",
      agree: false,
    },

    onSubmit: (values) => {
      try {
        axios.put(`https://6531ff574d4c2e3f333d78e7.mockapi.io/Films/${id}`, {
          name: values.name,
          poster: values.img,
          year: values.year,
          price: values.price,
        });
        alert("Sửa thành công");
        navigate("/dashboard");
      } catch (error) {
        console.log("Error Adding Film", error);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(3, "Must be 3 characters or more"),
      poster: Yup.string().required("Required.").url("Please type URL"),
      year: Yup.number().required("Required."),
      price: Yup.number()
        .required("Required.")
    }),
  });

  return (
    <>
      <div
        className="form"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form
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
              label="Name"
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
              label="Poster"
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
            Edit Film
          </Button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default EditModal;
