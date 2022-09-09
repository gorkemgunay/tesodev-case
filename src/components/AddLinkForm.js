import { useEffect, useState } from "react";
import { useDataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import Error from "./Error";

function AddLinkForm() {
  const { data, setData } = useDataContext();
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors({});
    let submitCheck = true;
    const regFullName = /^[a-zA-Z]\w+( [a-zA-Z]\w+)+/;
    const regText = /\b[A-Za-z]{2,40}\b/;
    const regEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!fullName.match(regFullName)) {
      submitCheck = false;
      setErrors((prev) => ({
        ...prev,
        fullName:
          "Name and surname should contain at least 2 words. Example 'John Doe'.",
      }));
    }
    if (!country.match(regText)) {
      submitCheck = false;
      setErrors((prev) => ({
        ...prev,
        country: "Country should contain at least 2 words. Max words 40.",
      }));
    }
    if (!city.match(regText)) {
      submitCheck = false;
      setErrors((prev) => ({
        ...prev,
        city: "City should contain at least 2 words. Max words 40.",
      }));
    }
    if (!email.match(regEmail)) {
      submitCheck = false;
      setErrors((prev) => ({
        ...prev,
        email: "Please type a valid email. Example 'john@mail.com'.",
      }));
    }

    if (submitCheck) {
      setFullName("");
      setCountry("");
      setCity("");
      setEmail("");
      localStorage.setItem(
        "data",
        JSON.stringify([
          ...data,
          [fullName, "Tesodev", email, "09/09/2022", country, city],
        ])
      );
      setData((prev) => [
        ...prev,
        [fullName, "Tesodev", email, "09/09/2022", country, city],
      ]);
      navigate("/");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setErrors({}), 5000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <Form onSubmit={(e) => submitHandler(e)} className="add-link-form">
        <Input
          label="Name Surname"
          htmlFor="fullName"
          placeholder="Enter name and surname"
          value={fullName}
          setValue={setFullName}
          error={errors.fullName}
        />
        <Input
          label="Country"
          htmlFor="country"
          placeholder="Enter a country"
          value={country}
          setValue={setCountry}
          error={errors.country}
        />
        <Input
          label="City"
          htmlFor="city"
          placeholder="Enter a city"
          value={city}
          setValue={setCity}
          error={errors.city}
        />
        <Input
          label="Email"
          htmlFor="email"
          placeholder="Enter a e-mail (abc@xyz.com)"
          value={email}
          setValue={setEmail}
          error={errors.email}
        />
        <Button
          type="submit"
          disabled={!fullName || !country || !city || !email}
        >
          Add
        </Button>
      </Form>
      {Object.keys(errors).length !== 0 && (
        <Error errors={errors} setErrors={setErrors} />
      )}
    </>
  );
}

export default AddLinkForm;
