import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useUpdateSetting } from "./useUpdateSetting";
import { useForm } from "react-hook-form";

function UpdateSettingsForm({ settings = {} }) {
  const { isUpdating, updateSetting } = useUpdateSetting();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: settings,
  });

  const onSubmit = (data) => {
    updateSetting(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Minimum nights/booking"
          errors={errors?.minBookingLength}
        >
          <Input
            disabled={isUpdating}
            type="number"
            id="minBookingLength"
            {...register("minBookingLength", {
              required: "Minimum Booking required",
              min: {
                value: 1,
                message: "Value cannot be 0 or less",
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Maximum nights/booking"
          errors={errors?.maxBookingLength}
        >
          <Input
            disabled={isUpdating}
            type="number"
            id="maxBookingLength"
            {...register("maxBookingLength", {
              required: "Maximum Booking required",
              min: {
                value: 1,
                message: "Value cannot be 0 or less",
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Maximum guests/booking"
          errors={errors?.maxGuestPerBooking}
        >
          <Input
            disabled={isUpdating}
            type="number"
            id="maxGuestPerBooking"
            {...register("maxGuestPerBooking", {
              required: "Maximum guests required",
              min: {
                value: 1,
                message: "Value cannot be 0 or less",
              },
            })}
          />
        </FormRow>
        <FormRow label="Breakfast price" errors={errors?.breakfastPrice}>
          <Input
            disabled={isUpdating}
            type="number"
            id="breakfastPrice"
            {...register("breakfastPrice", {
              required: "Breakfast required",
              min: {
                value: 1,
                message: "Value cannot be 0 or less",
              },
            })}
          />
        </FormRow>
        <FormRow>
          <Button disabled={isUpdating}>Update settings</Button>
        </FormRow>
      </Form>
    </>
  );
}

export default UpdateSettingsForm;
