import "./style.css";

import MenuButton from "./MenuButton";
import { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <MenuButton
      isOpen={isOpen}
      onClick={() => setOpen((prev) => !prev)}
      color="hsl(var(--primary))"
    />
  );
}
