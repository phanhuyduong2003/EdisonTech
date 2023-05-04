import "./App.css";
import { Formik } from "formik";
function App() {
  return (
    <Formik
      initialValues={{
        receiver: "",
        title: "",
        content: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.receiver) {
          errors.receiver = "Vui lòng nhập người nhận";
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.receiver)) {
          errors.receiver = "Định dạng email của người nhận không hợp lệ";
        }
        if (!values.title) {
          errors.title = "Vui lòng nhập tiêu đề email";
        }
        if (!values.content) {
          errors.content = "Vui lòng nhập nội dung email";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmit,
      }) => (
        <form
          action=""
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            width: 500,
            padding: 30,
          }}
        >
          <input
            type="text"
            name="receiver"
            placeholder="Nhập email người nhận"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.receiver}
          />
          {errors.receiver && touched.receiver && <div>{errors.receiver}</div>}
          <input
            type="text"
            name="title"
            id=""
            placeholder="Nhập tiêu đề email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && <div>{errors.title}</div>}
          <textarea
            type="text"
            name="content"
            id=""
            placeholder="Nhập nội dung email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          ></textarea>
          {errors.content && touched.content && <div>{errors.content}</div>}
          <input type="file" name="file" id="" style={{ marginBottom: 10 }}/>
          <button type="submit" disabled={isSubmit}>Gửi</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
