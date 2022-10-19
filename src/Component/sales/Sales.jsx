import React from "react";
import Item from "../utilities/Item";
import Title from "../utilities/Title";

const Sales = ({ifExit, endpoint: { title, items } }) => {
  return (
    <div className="sales">
      <Title title={title} />
      <div className="sales-contents">
        <div className="row">
          {items.map((item, i) => (
            <div
              className={`${
                ifExit
                  ? "col-lg-4 col-md-6 col-12 my-3"
                  : "col-lg-3 col-md-6 col-12 my-3"
              }`}
              key={i}
            >
              <Item {...item} ifExit={ifExit}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
