import React, { useRef, useState } from "react";
import Header from "../components/Header";
import EventList from "../components/EventList";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EventFormModal from "../components/EventFormModal";

function Events() {
 
  return (
    <div className="bg-neutral-50">
      <Header />
      <div className="flex items-center justify-center">
        <div className=" hidden lg:block">
          <EventFormModal />
        </div>
      </div>
      <EventList />
    </div>
  );
}

export default Events;
