import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Name should not contain numbers")
    .min(2, "Username should contain 2-60 characters")
    .max(60, "Username should contain 2-60 characters")
    .required("Name is a required field"),
  email: yup
    .string()
    .matches(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      "Email is not correct"
    )
    .email("Email should have correct format")
    .required("Email is a required field"),
  phone: yup
    .string()
    .matches(/^[\+]{0,1}380([0-9]{9})$/, "Phone number is not correct")
    .required("Phone is a required field"),
  position_id: yup.number().required("Required"),
  photo: yup
    .mixed()
    .test("fileType", "Suppoted extensions jpeg/jpg", (value) => {
      if (!value) return false;
      return (
        value &&
        (value[0]?.type === "image/jpg" || value[0]?.type === "image/jpeg")
      );
    })
    .test("fileSize", "The file is too large", (value) => {
      if (!value) return false;
      return value && value[0]?.size <= 5242880; // equals 5 MB
    })
    //ломает всю схему валидируя только поле с файлом при его внисении в поле
    // .test("minHeigthWidth", "Minimum dimesion size is 70 x 70px", (value) => {
    //   return new Promise((resolve) => {
    //     const reader = new FileReader() ;
    //     reader.readAsDataURL(value[0]);
    //     reader.onload = function (value) {
    //       const img = new Image() as any;
    //       img.src = value.target!.result;
    //       img.onload = function () {
    //         if (this.width >= 70 && this.height >= 70) {
    //           resolve(true);
    //         } else {
    //           resolve(false);
    //         }
    //       };
    //     };
    //   });
    // })
    .required("A file is required"),
});
