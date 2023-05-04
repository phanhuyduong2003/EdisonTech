import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="container" style={{padding: 20}}>
      <h1>Tờ khai y tế</h1>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", width: 300 }}
        onSubmit={handleSubmit(data=> console.log(data))}
      >
        <label htmlFor="">Tên: </label>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: "Vui lòng nhập tên",
          })}
        />
        {errors?.name && <div>{errors?.name.message}</div>}
        <label htmlFor="">Địa chỉ: </label>
        <textarea
          type="text"
          name="address"
          {...register("address", {
            required: "Vui lòng nhập địa chỉ",
          })}
        ></textarea>
        {errors?.address && <div>{errors?.address.message}</div>}
        <label htmlFor="">Số điện thoại: </label>
        <input
          type="text"
          name="phonenumber"
          {...register("phonenumber", {
            required: "Vui lòng nhập số điện thoại",
            minLength: {
              value: 10,
              message: "Số điện thoại phải có độ dài là 10 kí tự",
            },
            maxLength: {
              value: 10,
              message: "Số điện thoại phải có độ dài là 10 kí tự",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Số điện thoại chỉ được chứa kí tự là số",
            },
          })}
        />
        {errors?.phonenumber && <div>{errors?.phonenumber.message}</div>}
        <label htmlFor="">Email: </label>
        <input
          type="text"
          name="email"
          {...register("email", {
            required: "Vui lòng nhập email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Định dạng email sai",
            },
          })}
        />
        {errors?.email && <div>{errors?.email.message}</div>}
        <p>Trong 14 ngày qua bạn gặp triệu chứng nào sau đây?</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label htmlFor="">Sốt</label>
          <input type="checkbox" name="fever" {...register("fever")} />
          <label htmlFor="">Ho</label>
          <input type="checkbox" name="cough" {...register("cough")} />
          <label htmlFor="">Đau họng</label>
          <input
            type="checkbox"
            name="sore_throat"
            {...register("sore_throat")}
          />
        </div>
        <button type="submit">Xác nhận</button>
      </form>
    </div>
  );
}

export default App;
