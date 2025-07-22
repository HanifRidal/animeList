"use client";
import { FileSearchIcon } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-accent">
      <FileSearchIcon size={55} className="mb-4" />
      <h2 className="font-bold text-4xl">Not Found</h2>
      <p className="">Could not find requested resource</p>
      <Link
        href="/"
        className="text-primary hover:text-accent transition-all mt-4 underline"
      >
        Return Home
      </Link>
    </div>
  );
};

export default Page;
