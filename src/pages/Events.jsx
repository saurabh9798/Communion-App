import React, { useRef, useState } from "react";
import Header from "../components/Header";
import EventList from "../components/EventList";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EventFormModal from "../components/EventFormModal";

function Events() {
  const addRef = useRef();
  useGSAP(() => {
    gsap.from(addRef.current, { y: -50, duration: 1, ease: "power2.out" });
  });
  return (
    <div className="bg-neutral-50">
      <Header />
      <div ref={addRef} className="flex items-center justify-center">
        <div className="hidden lg:block">
          <EventFormModal />
        </div>
      </div>
      <EventList />
    </div>
  );
}

export default Events;
