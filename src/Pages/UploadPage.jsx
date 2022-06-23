import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Input from "../Components/Input/Input";
import Layout from "../Layout/Layout";

function UploadPage() {
  const { state } = useLocation();

  useEffect(() => {
    console.log(state, "<=== data is hereee");
  }, []);

  return (
    <Layout>
      <main className="flex-center bg-white min-h-screen p-5">
        <form>
          <Input lbl="Title" />
        </form>
      </main>
    </Layout>
  );
}

export default UploadPage;
