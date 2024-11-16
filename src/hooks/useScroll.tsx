import { useEffect } from "react";

export default function useScroll(id: string) {
  useEffect(() => {
    const element = document.querySelector(`#${id}`);

    if (element) {
      console.log(element);
    }
  });
}
