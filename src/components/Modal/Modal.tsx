import { useForm } from "react-hook-form";
import {
  Backdrop,
  Modal,
  BtnClose,
  Title,
  Input,
  Form,
  ErrMsg,
} from "./Modal.styled";

import { MdClose } from "react-icons/md";
import { useAppDispatch } from "../../hooks/hook";
import { updateData } from "../../redux/Table/operation";

interface ModalWindowProps {
  id: number;
  data: {
    name: string;
    email: string;
    birthday_date: string;
    phone_number: string;
    address?: string;
  } | null;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string | null;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ id, data, onClose }) => {
  const dispatch = useAppDispatch();

  const initialFormValues: FormData = {
    name: "",
    email: "",
      birthday_date: "",
      phone_number: "",
      address: null as string | null,
  };

  if (data) {
    initialFormValues.name = data.name;
    initialFormValues.email = data.email;
      initialFormValues.birthday_date = data.birthday_date;
      initialFormValues.phone_number = data.phone_number;
      initialFormValues.address = data.address|| null;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialFormValues });

  const onSubmit = (TableData: object) => {
      console.log(TableData);
      dispatch(updateData({ id, TableData }));

    onClose();
  };

  const closeModal = () => {
    reset();
    onClose();
  };

  return (
    <Backdrop>
      <Modal>
        <BtnClose type="button" onClick={() => closeModal()}>
          <MdClose size={24} />
        </BtnClose>
        <Title>Edit data</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* <inputWrap> */}
          <label>name</label>
          <Input
            placeholder="Name"
            type="text"
            {...register("name", {
              required: "This field is required",
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
          {/* </inputWrap> */}
          <label>email</label>
          <Input
            placeholder="Enter email"
            {...register("email", {
              required: "This field is required",
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label>B-day date</label>
          <Input
            placeholder="Enter B-day date"
            {...register("birthday_date", {
                required: "This field is required",
                pattern: {
                value: /^(?:19|20)\d\d-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)$/,
                message: "Invalid date format (YYYY-MM-DD)",
              },
            })}
          />
          {errors.birthday_date && <ErrMsg>{errors.birthday_date.message}</ErrMsg>}
          <label>Phone nubmber</label>
          <Input
            placeholder="Enter phone number"
            {...register("phone_number", {
              required: "This field is required",
            })}
          />
          {errors.phone_number && <p>{errors.phone_number.message}</p>}
          <label>address</label>
          <Input
            placeholder="Enter adress"
            {...register("address")}
          />
          {errors.address && <p>{errors.address.message}</p>}

          <button type="submit">Submit</button>
        </Form>
      </Modal>
    </Backdrop>
  );
};
