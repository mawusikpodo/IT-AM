"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const { userId } = useAuth();
  const { user } = useUser();

  return (
    <section className="text-gray-600 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to Your Ultimate Asset Management Solution
            <br className="hidden lg:inline-block italic" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Gain full visibility into your assets with our advanced tracking
            system.
          </p>
          <div className="flex justify-center">
            {user ? (
              <Link
                href="/dashboard/files"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/dashboard/files"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src="/logo1.svg"
            width="600"
            height="600"
            alt="file drive logo"
            className="inline-block mb-8"
          />
        </div>
      </div>
    </section>
  );
}
