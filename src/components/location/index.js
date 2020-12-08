import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59658.565882962976!2d106.67810792924806!3d20.845416892003932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7abb0de43311%3A0xb1f22e753b40e0ff!2zQmlnIEMgSOG6o2kgUGjDsm5n!5e0!3m2!1svi!2s!4v1597773323532!5m2!1svi!2s"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="a"
      ></iframe>
      <div className="location_tag"></div>
    </div>
  );
};

export default Location;
