import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-des", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (Low first)" },
          { value: "regularPrice-des", label: "Sort by price (Hight first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (Low first)" },
          {
            value: "maxCapacity-des",
            label: "sort by capacity (Hight first)",
          },
        ]}
      />
    </TableOperations>
  );
}
