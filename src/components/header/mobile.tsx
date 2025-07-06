"use client";

import React from "react";
import Button from "../button";
import { IoIosMenu } from "react-icons/io";
import { Nav } from "./nav";
import { IoClose } from "react-icons/io5";

export function Mobile() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="flex xl:hidden">
      <Button variant="icon" onClick={() => setOpen(true)}>
        <IoIosMenu size={30} />
      </Button>

      <div
        className={`${
          open ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-black shadow-lg h-screen`}
      >
        <Nav onClick={() => setOpen(false)} />

        <Button
          variant="secondary"
          className="absolute top-4 right-4"
          onClick={() => setOpen(false)}
        >
          <IoClose size={30} />
        </Button>
      </div>
    </div>
  );
}
