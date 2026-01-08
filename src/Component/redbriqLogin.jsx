import axios from "axios";

export async function redbriqLogin() {
  const url = "https://app.redbriq.com/api/auth/login";

  const payload = {
    username: "keerthipromoters@gmail.com",
    password: "Vasu@321",
    rememberMe: true
  };

  const res = await axios.post(url, payload, {
    withCredentials: true,
    validateStatus: () => true
  });

  const cookies = res.headers["set-cookie"];

  if (!cookies) throw new Error("Login failed: No cookies returned");

  let token = "";
  let refreshToken = "";
  let expiry = Date.now() + 3 * 60 * 60 * 1000; // 3 hours

  cookies.forEach(c => {
    if (c.startsWith("token=")) token = c.split(";")[0].replace("token=", "");
    if (c.startsWith("refreshToken=")) refreshToken = c.split(";")[0].replace("refreshToken=", "");
  });

  return { token, refreshToken, expiry };
}
