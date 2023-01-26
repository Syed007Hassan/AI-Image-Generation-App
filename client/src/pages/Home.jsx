import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import FormField from "../components/FormField";
import Loader from "../components/Loader";

const RenderCards = ({ data, title }) => {
  if (data.length > 0) {
    return data.map((post) => {
      return <Card key={post._id} {...post} />;
    });
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <section>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[30px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] tex-[16px] max-w[500px]">
          Browse through a collection of imaginative and visuallly stunning
          images generated by DALL-E-AI.
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for{" "}
                <span className="text-[#222328]"> {searchText} </span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 ">
              {searchText ? (
                <RenderCards data={[]} title="No Search Result Found" />
              ) : (
                <RenderCards data={[]} title="No Posts Found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
