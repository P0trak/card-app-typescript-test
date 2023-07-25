import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { useTheme } from "../hook/useTheme";

export default function Settings() {

  const [theme, handleChange] = useTheme('dark');

  return (
    <section>
      <p className="text-center font-medium text-md">
        Dark mode
        <div>
        <label className="switch">
            <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
            <span className="slider"></span>
        </label>
        </div>
      </p>
    </section>
  );
}
