import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

import { useSetting } from "./useSetting";

function UpdateSettingsForm() {
  const { isLoading, settings = {} } = useSetting();
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestPerBooking,
    breakfastPrice,
  } = settings;

  return (
    <>
      {isLoading && <Spinner />}
      <Form>
        <FormRow label="Minimum nights/booking">
          <Input
            defaultValue={minBookingLength}
            type="number"
            id="min-nights"
          />
        </FormRow>
        <FormRow label="Maximum nights/booking">
          <Input
            defaultValue={maxBookingLength}
            type="number"
            id="max-nights"
          />
        </FormRow>
        <FormRow label="Maximum guests/booking">
          <Input
            defaultValue={maxGuestPerBooking}
            type="number"
            id="max-guests"
          />
        </FormRow>
        <FormRow label="Breakfast price">
          <Input
            defaultValue={breakfastPrice}
            type="number"
            id="breakfast-price"
          />
        </FormRow>
      </Form>
    </>
  );
}

export default UpdateSettingsForm;
