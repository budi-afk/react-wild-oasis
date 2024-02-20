import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import { useCabin } from "./useCabin";

export default function CabinTable() {
  const { isLoading, data, error } = useCabin();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // 1. filter by discount
  const filterValue = searchParams.get("discount") || "all";

  let filteredData;
  if (filterValue === "all") filteredData = data;

  if (filterValue === "no-discount")
    filteredData = data.filter((item) => item.discount === 0);

  if (filterValue === "with-discount")
    filteredData = data.filter((item) => item.discount > 0);

  // 2. sort by name, regularPrice or maxCapacity
  const sortBy = searchParams.get("sortBy") || "id-des";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedData = filteredData?.sort((a, b) =>
    typeof a[field] === "string"
      ? a[field].localeCompare(b[field]) * modifier
      : (a[field] - b[field]) * modifier
  );

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
          data={sortedData}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
