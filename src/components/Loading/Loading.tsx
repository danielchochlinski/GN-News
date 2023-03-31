import React from "react";
import Dna from "react-loader-spinner/dist/loader/Dna";
const style = {
  width: "320px",
  height: "320px",
};
const Loading = () => {
  return (
    <Dna
      visible={true}
      height="380 !important"
      width="340 !important"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};

export default Loading;
