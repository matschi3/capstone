import React, { useState } from "react";
import useSWR from "swr";
import { Form, StyledButton } from "./ImageUploadForm.styled.js";

export default function ImageUploadForm() {
  const { mutate } = useSWR("/api/images/");
  const [uploadStatus, setUploadStatus] = useState("");
  const [error, setError] = useState(undefined);

  async function submitImage(event) {
    event.preventDefault();
    setUploadStatus("Uploading...");
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/upload", {
        method: "post",
        body: formData,
      });
      if (response.status === 201) {
        mutate();
        setUploadStatus("Upload complete!");
      }
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <h2>Image Upload</h2>
      <Form onSubmit={submitImage}>
        <input type="file" name="file" />
        <StyledButton type="submit">Upload</StyledButton>
        <p>{uploadStatus}</p>
        {error && <p>{error.message}</p>}
      </Form>
    </>
  );
}
