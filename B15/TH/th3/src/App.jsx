import React from "react";
import { Formik } from "formik";
export default function App() {
  return (
    <Formik
      initialValues={{
        email: "",
        confirmPassword: "",
        password: "",
        isRead: false,
      }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        }
        if (!values.password) {
          errors.password = 'Required'
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = 'Required'
        }
        if (values.confirmPassword !== values.password) {
          errors.confirmPassword = 'Confirm password is not match'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Nhập email: </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email} </div>
          )}
          <br />
          <label htmlFor="">Nhập password: </label>
          <input
            type="password"
            name="password"
            id=""
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && (
            <div className="error">{errors.password} </div>
          )}
          <br />
          <label htmlFor="">Nhập lại password: </label>
          <input
            type="password"
            name="confirmPassword"
            id=""
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <div className="error">{errors.confirmPassword} </div>
          )}
          <br />
          <br />
          <label htmlFor="">I read and accept the privacy policy: </label>
          <input
            type="checkbox"
            name="isRead"
            checked={values.isRead}
            onChange={handleChange}
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
    // <div className="container">
    //   <h1>Đăng kí</h1>
    //   {errors.map((error) => (
    //     <p key={error}>Error: {error}</p>
    //   ))}
    //   <form onSubmit={handleSubmit}>
    //     <p>Nhập email:</p>
    //     <input
    //       type="text"
    //       name="email"
    //       defaultValue={values.email}
    //       onChange={handleChange}
    //     />
    //     <p>Nhập password</p>
    //     <input
    //       type="text"
    //       name="password"
    //       defaultValue={values.password}
    //       onChange={handleChange}
    //     />
    //     <p>Nhập password</p>
    //     <input
    //       type="text"
    //       name="confirmPassword"
    //       defaultValue={values.confirmPassword}
    //       onChange={handleChange}
    //     />
    //     <br />
    //     <br />
    //     <label>I read and accept the privacy policy:</label>
    //     <input
    //       type="checkbox"
    //       name="isRead"
    //       checked={values.isRead}
    //       onChange={handleChange}
    //     />
    //     <button>Submit</button>
    //   </form>
    //   <div className="show-json-string-setValues">{stringJson}</div>
    // </div>
  );
}
