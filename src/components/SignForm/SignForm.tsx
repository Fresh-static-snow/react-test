import { FC, useState, useEffect } from "react";
import styles from "./SignForm.module.scss";
import MyButton from "../MyButton/MyButton";
import { schema } from "./schema";
import UserRegistered from "../UserRegistered/UserRegistered";
import { userAPI } from "../../services/UserService";
import { positionAPI } from "../../services/PositionsService";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input/Input";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { IForm } from "../../models/form.types";
import axios from "axios";
import { ITokenResponse } from "../../models/response/tokenResponse";
import { Button } from "@mui/material";

const SignForm: FC = () => {
  const [token, setToken] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    control,
  } = useForm<IForm>({
    defaultValues: { name: "", email: "", phone: "", photo: "" },
    mode: "all",
    resolver: yupResolver(schema),
  });
  const { data } = positionAPI.useGetAllPositionsQuery();
  const [createPost, { isError, isSuccess }] = userAPI.useCreateUserMutation();

  useEffect(() => {
    getToken();
    return () => {};
  }, []);

  const getToken = async () => {
    const { data, status } = await axios.get<ITokenResponse>(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    if (status === 200) {
      setToken(data.token);
      localStorage.setItem("token", data.token);
    }
  };

  const onSubmit: SubmitHandler<IForm> = async (submitData) => {
    console.log(submitData);
    const formData = new FormData();
    const entries = Object.entries(submitData).filter(
      (entry) => entry[0] !== "photo"
    );
    if (submitData.photo) {
      formData.append("photo", submitData.photo[0]);
    }

    entries.forEach((entry: any) => {
      formData.append(entry[0], entry[1]);
    });

    await createPost({ body: formData, headers: { Token: token } }); //w/ TOKEN
  };

  return (
    <>
      <h1 className={styles.header}>
        Working with <br /> POST request
      </h1>

      <div className={styles.container}>
        {isSuccess ? (
          <UserRegistered />
        ) : (
          <>
            <div style={{ height: "50px" }}></div>
            <div
            // className={styles.form}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.container}
                noValidate
              >
                <Input
                  //sx={{mt: '50px'}}
                  {...register("name")}
                  name={"name"}
                  type={"text"}
                  label={"Your name"}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
                <div style={{ height: "50px" }}></div>

                <Input
                  {...register("email")}
                  name={"email"}
                  type={"text"}
                  label={"Email"}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <div style={{ height: "50px" }}></div>

                <Input
                  {...register("phone")}
                  name={"phone"}
                  type={"text"}
                  label={"Phone"}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  className={styles.helpertext}
                />
                <div style={{ height: "26px" }}></div>

                <FormLabel>Select your position</FormLabel>
                <Controller
                  name={"position_id"}
                  control={control}
                  render={({ field }) => (
                    <RadioGroup>
                      {data &&
                        data?.positions?.map((pos) => (
                          <FormControlLabel
                            {...field}
                            key={pos.id}
                            name={"position_id"}
                            value={pos.id}
                            control={<Radio color="secondary" />}
                            label={pos.name}
                          />
                        ))}
                    </RadioGroup>
                  )}
                />

                <div style={{ height: "50px" }}></div>

                <Button variant="contained" color="secondary" component="label">
                  Upload File
                  <input
                    id="inputfile"
                    {...register("photo")}
                    type={"file"}
                    name={"photo"}
                    hidden
                  />
                </Button>

                {errors?.photo && (
                  <div style={{ color: "red", marginBottom: 10 }}>
                    {errors.photo?.message}
                  </div>
                )}

                <div style={{ height: "50px" }}></div>
                {isError && (
                  <div>User with this phone or email already exist</div>
                )}
                <MyButton
                  disabled={!isDirty || !isValid}
                  type="submit"
                  style={{
                    width: "120px",
                    display: "flex",
                    alignSelf: "center",
                    justifySelf: "center",
                    padding: "0px",
                  }}
                  text={"Sign up"}
                />
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SignForm;
