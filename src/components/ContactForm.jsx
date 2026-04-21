import React from "react";
import Navbar from "./Navbar";

function ContactForm() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-boltsWhite">
      <Navbar />
      <div className="flex flex-1 flex-col pt-24">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdfS_-ttWzAZgGuQmiPTEAUPUQfxvDdu_D094EoO8LnqodqCQ/viewform?usp=sharing&ouid=117489490932856860370"
          className="mx-auto w-full max-w-2xl flex-1 min-h-[calc(100vh-6rem)] border-0"
          title="Interest form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default ContactForm;
