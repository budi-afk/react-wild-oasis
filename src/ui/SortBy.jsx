import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options }) {
  const [sortParams, setSortParams] = useSearchParams();
  const currentSortBy = sortParams.get("sortBy") || "";

  function handleChange(event) {
    sortParams.set("sortBy", event.target.value);
    setSortParams(sortParams);
  }

  return (
    <Select
      options={options}
      value={currentSortBy}
      onChange={handleChange}
      type="white"
    />
  );
}
