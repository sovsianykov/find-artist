import { useDispatch } from "react-redux";
import { FormEvent, SyntheticEvent, useState } from "react";
import { initialUser, User } from "../models/models";
import { createUser, fetchStart, fetchSuccess } from "../redux/actions";

export const useForm = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState<User>(initialUser);

  const onChangeHandler = (
    e: FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNewUser({ ...newUser, [e.currentTarget.name]: e.currentTarget.value });
  };
  const onSubmitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(createUser(newUser));
    setNewUser(initialUser);
    alert("new profile is created");
    dispatch(fetchStart());
    dispatch(fetchSuccess());
  };
  return { newUser, onSubmitHandler, onChangeHandler };
};
