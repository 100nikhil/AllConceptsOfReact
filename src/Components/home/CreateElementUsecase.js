import { Fragment } from "react";

const CreateElementUsecase = () => {
  const title = "Office Space";
  const officeImage = (
    <img
      src="https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg"
      width="200px"
      height="200px"
      alt="office"
    />
  );
  const items = [
    { name: "DBS", rent: 30000, address: "Meerut" },
    { name: "CBS", rent: 50000, address: "Delhi" },
    { name: "NBS", rent: 20000, address: "Muzaffarnagar" },
  ];

  return (
    <Fragment>
      <h1>{title}, at Affordable Range</h1>
      {items.map(item => {
        return (
          <Fragment>
          <hr /> 
          {officeImage}
          <h1>Name: {item.name}</h1>
          <h3 style={{ color: item.rent>40000 ? 'red':'green' }}>Rent: {item.rent}</h3>
          <h3>Address: {item.address}</h3>
          </Fragment>
        )
      })}
    </Fragment>
  );
};

export default CreateElementUsecase;
