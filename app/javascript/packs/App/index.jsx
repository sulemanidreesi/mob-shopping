import React from "react";
import ProductList from "./components/product-list";
import "../../stylesheets/application";

export default (props) => {
  return (
    <div>
      {document.getElementById("products") && <ProductList />}
    </div>
  );
};
