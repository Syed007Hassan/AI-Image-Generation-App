import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};

  const handelSurpriseMe = () => {};

  return (
    <section>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[30px]">Create</h1>
        <p className="mt-2 text-[#666e75] tex-[16px] max-w[500px]">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with community.
        </p>
      </div>

      <form className="mt-16 max-w-3x1" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Name"
            type="text"
            name="name"
            placeholder="Jon Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handelSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
