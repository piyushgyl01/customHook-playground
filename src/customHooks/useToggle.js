import { useState } from "react";

export default function useToggle(init) {
  const [value, setValue] = useState(init);

  function toggleValue() {
    setValue(!value);
  }

  return { value, toggleValue };
}
