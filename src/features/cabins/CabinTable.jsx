import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

export default function CabinTable() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("discount") || "all";

  let filteredData;
  if (filterValue === "all") filteredData = data;

  if (filterValue === "no-discount")
    filteredData = data.filter((item) => item.discount === 0);

  if (filterValue === "with-discount")
    filteredData = data.filter((item) => item.discount > 0);

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </Table.Header>
        <Table.Body
          data={filteredData}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
