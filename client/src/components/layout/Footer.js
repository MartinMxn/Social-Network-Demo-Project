import React from "react";

export default function Footer() {
  return (
    //  margin top 4 padding 4
    //  &copy is character of c
    <footer className="bg-dark text-white mt-4 p-3 text-center">
      <br/>
      Copyright &copy; {new Date().getFullYear()} DevConnector
    </footer>
  );
}
