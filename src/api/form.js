import { BASE_API } from "../utils/constants";

export async function sendFormApi(full_name, email, mobile) {
    try {
      const url = `${BASE_API}/api/form/`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: full_name,
          email: email,
          mobile: mobile,
        }),
      };
      await fetch(url, params);
    } catch (error) {
      throw error;
    }
  }