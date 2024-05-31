import React, { useEffect } from "react";

const BackButtonLogger = () => {
  useEffect(() => {
    const handleBackButton = () => {
      console.log("Back");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  return <div>Click the browser back button</div>;
};

export default BackButtonLogger;
