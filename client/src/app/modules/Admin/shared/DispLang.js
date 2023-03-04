import React from "react";

function DispLang({ title }) {
  return (
    <>
      {title && (
        <>
          {localStorage.getItem("i18nConfig") &&
          JSON.parse(localStorage.getItem("i18nConfig"))["selectedLang"] ===
            "ar"
            ? title.ar
            : title.en}
        </>
      )}
    </>
  );
}

export default DispLang;
