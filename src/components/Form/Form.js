import React from "react";
import {
  Container,
  Form as FORM_SEMANTIC,
  Button,
  Card,
} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Form.scss";
import { useForm } from "../../hooks";

export function Form() {
  const { sendForm } = useForm();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      mobile: "",
    },
    validationSchema: Yup.object(newSchema()),
    onSubmit: async (formData, onSubmitProps) => {
      try {
        await sendForm(formData.full_name, formData.email, formData.mobile);
        
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="form">
      <Card className="form__card">
        <Container className="form__card__container">
          <h1>Formulario de contacto</h1>
          <FORM_SEMANTIC
            className="form__card__container-form"
            onSubmit={formik.handleSubmit}
          >
            <FORM_SEMANTIC.Input
              type="text"
              placeholder="Nombre y apellido"
              name="full_name"
              className="form__card__container-form-input"
              onChange={formik.handleChange}
              error={formik.errors.full_name && true}
            />
            <FORM_SEMANTIC.Input
              type="text"
              placeholder="Email"
              name="email"
              className="form__card__container-form-input"
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
            <FORM_SEMANTIC.Input
              type="text"
              placeholder="Número de teléfono"
              name="mobile"
              className="form__card__container-form-input"
              onChange={formik.handleChange}
              error={formik.errors.mobile}
            />

            <Button type="submit">Enviar</Button>
          </FORM_SEMANTIC>
        </Container>
      </Card>
    </div>
  );
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function newSchema() {
  return {
    full_name: Yup.string().required(),
    email: Yup.string().email("No es un email válido").required("El email es"),
    mobile: Yup.string().matches(
      phoneRegExp,
      "El número de teléfono no es válido"
    ),
  };
}
