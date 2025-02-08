import { useState } from "react";
import {
  TextArea,
  Button,
  TextField,
} from "@bcgov/design-system-react-components";

export const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      });
      if (response.ok) {
        alert("Feedback submitted successfully!");
        setFeedback({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div>
      <h1>Submit Feedback</h1>

      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Name"
          id="name"
          isRequired
          value={feedback.name}
          onChange={(e) => setFeedback({ ...feedback, name: e })}
        />

        <TextField
          type="email"
          label="Email"
          id="email"
          isRequired
          value={feedback.email}
          onChange={(e) => setFeedback({ ...feedback, email: e })}
        />

        <TextArea
          label="Message"
          id="message"
          isRequired
          value={feedback.message}
          onChange={(e) => setFeedback({ ...feedback, message: e })}
        />

        <Button type="submit">Submit Feedback</Button>
      </form>
    </div>
  );
};
