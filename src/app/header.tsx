"use client";
import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SideNav } from "./dashboard/side-nav";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative z-10 border-b py-4 bg-gray-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex gap-2 items-center text-xl text-black">
          <Image src="/logo.png" width="50" height="50" alt="IT-AM logo" />
          UG IT Assets Management
        </Link>

        <button className="lg:hidden text-2xl p-2" onClick={toggleDrawer}>
          ☰
        </button>

        <div className="hidden lg:flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      {/* Drawer Menu */}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-white transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <button
          className="text-2xl p-2 absolute top-4 right-4 text-black "
          onClick={toggleDrawer}
        >
          ✕
        </button>
        <nav className="mt-16">
          <div className="space-y-4">
            <div className="p-4">
              <div className="pb-4">
                <OrganizationSwitcher />
              </div>

              <UserButton />

              <SignedOut>
                <SignInButton>
                  <Button>Sign In</Button>
                </SignInButton>
              </SignedOut>
            </div>

            <SideNav />
          </div>
        </nav>
      </div>
    </div>
  );
}
