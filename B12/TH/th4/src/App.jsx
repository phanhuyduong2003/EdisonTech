import logo from "./logo.svg";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-blue-500 font-bold text-4xl">Login</h1>
      <form>
        <p className="mt-8">Email: </p>
        <input
          type="email"
          name="email"
          className="border rounded border-blue-600 h-9 w-full mt-2"
        />
        <p className="mt-4">Password: </p>
        <input
          type="password"
          name="password"
          className="border rounded border-blue-600 h-9 w-full mt-2"
        />
        <br />
        <label htmlFor="">
          <input type="checkbox" name="isRead" className="mt-4"/> I read and accept the privacy
          policy:
        </label>
        <br />
        <button className="mt-8 h-9 border rounded w-40 bg-blue-400 text-white font-bold">Submit</button>
      </form>
    </div>
  );
}

export default App;
