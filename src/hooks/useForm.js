import { useState } from "react";

import {
    sendFormApi,
  } from "../api/form";

  export function useForm() {
    const [error, setError] = useState(false);
  
    const sendForm = async (full_name, email, mobile) => {
      try {
        await sendFormApi(full_name, email, mobile);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      error,
      sendForm,
    };
  }
  