import React from "react";
import CarsIndex from "../components/Cars/CarsIndex";

class CarsContainer extends React.Component {
  render() {
    const { cars, makes, tempData } = this.props;
    const carList = cars.map(car => car.attributes);
    const makeList = makes.map(make => make.attributes);

    console.log(tempData);

    return (
      <div>
        Hello from CarsContainer!
        <CarsIndex carList={carList} makeList={makeList} tempData={tempData} />
      </div>
    );
  }
}
export default CarsContainer;
