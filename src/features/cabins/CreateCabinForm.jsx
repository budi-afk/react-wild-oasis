import styled from "styled-components";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";

import { useCreateCabin } from "./useCreateCabin";
import { useUpdateCabin } from "./useUpdateCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isUpdating, updateCabin } = useUpdateCabin();

  const { id: editId, ...cabinEdit } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const isWorking = isCreating || isUpdating;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues: cabinEdit,
  });

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession) {
      updateCabin({ newCabinData: { ...data, image }, id: editId });
    } else {
      createCabin(
        { ...data, image },
        {
          onSuccess: (data) => {
            console.log(data);
            reset();
          },
        }
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" errors={errors?.name}>
        <Input
          disabled={isWorking}
          type="text"
          id="name"
          placeholder="Cabin name"
          {...register("name", {
            required: "Cabin name is required",
          })}
          aria-invalid={errors?.name ? "true" : "false"}
        />
      </FormRow>

      <FormRow label="Maximum capacity" errors={errors?.maxCapacity}>
        <Input
          disabled={isWorking}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "Maximum capacity is required",
            min: {
              value: 1,
              message: "Value cannot be 0 or less",
            },
          })}
          aria-invalid={errors?.maxCapacity ? "true" : "false"}
        />
      </FormRow>

      <FormRow label="Regular price" errors={errors?.regularPrice}>
        <Input
          disabled={isWorking}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "Regular price is required",
            min: { value: 1, message: "Value cannot be 0 or less" },
          })}
          aria-invalid={errors?.regularPrice ? "true" : "false"}
        />
      </FormRow>

      <FormRow label="discount" errors={errors?.discount}>
        <Input
          disabled={isWorking}
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            min: { value: 0, message: "The value cannot be negative" },
            validate: (value) =>
              value <= Number(getValues().regularPrice) ||
              "The discount cannot be more than regular price",
          })}
          aria-invalid={errors?.discount ? "true" : "false"}
        />
      </FormRow>

      <FormRow label="Description" errors={errors?.description}>
        <Textarea
          disabled={isWorking}
          type="number"
          id="description"
          placeholder="Description"
          defaultValue=""
          {...register("description", { required: "Description is required" })}
          aria-invalid={errors?.description ? "true" : "false"}
        />
      </FormRow>

      <FormRow label="Cabin image" errors={errors?.image}>
        <FileInput
          disabled={isWorking}
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "Cabin photo is required",
          })}
          aria-invalid={errors?.image ? "true" : "false"}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={isWorking} variations="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Update cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
