import Heading from "../ui/Heading";
import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import Row from "../ui/Row";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
