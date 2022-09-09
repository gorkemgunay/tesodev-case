import { useState } from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

function AddLinkForm({ onSubmit }) {
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Form onSubmit={onSubmit} className="add-link-form">
      <Input
        label="Name Surname"
        htmlFor="fullName"
        placeholder="Enter name and surname"
        value={fullName}
        setValue={setFullName}
      />
      <Input
        label="Country"
        htmlFor="country"
        placeholder="Enter a country"
        value={country}
        setValue={setCountry}
      />
      <Input
        label="City"
        htmlFor="city"
        placeholder="Enter a city"
        value={city}
        setValue={setCity}
      />
      <Input
        label="Email"
        htmlFor="email"
        placeholder="Enter a e-mail (abc@xyz.com)"
        value={email}
        setValue={setEmail}
      />
      <Button>Add</Button>
    </Form>
  );
}

export default AddLinkForm;
