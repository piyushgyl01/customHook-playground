import { useState } from "react";

export default function useLogger() {
  const [value, setValue] = useState("");
  console.log(value);

  return { value, setValue };
}
