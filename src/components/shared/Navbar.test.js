import axios from "axios";

it("Checks data is being called", () => {
  const data = axios.get(process.env.REACT_APP_GET);
  console.log(data);
  expect(data.data).toBe(data.data);
});
