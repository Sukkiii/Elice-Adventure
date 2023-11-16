import { useEffect } from "react";

function useChangeColor(changeId) {
  useEffect(() => {
    const changeElement = document.getElementById(changeId);
    changeElement.style.color = "skyblue";
  }, []);
}

export default useChangeColor;
