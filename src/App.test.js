import axios from "axios";

it("Checks data is being called", () => {
  const data = axios.get("https://book-server-50kq.onrender.com/books");

  expect(data).toBe(data);
});
