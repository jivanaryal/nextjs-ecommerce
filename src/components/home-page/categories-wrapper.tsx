import React from "react";
import CategoriesList from "./categories-list";

type Props = {};

const CategorisWrapper = (props: Props) => {
  return (
    <div className="container">
      <h2>Categories</h2>
      <CategoriesList />
    </div>
  );
};

export default CategorisWrapper;
