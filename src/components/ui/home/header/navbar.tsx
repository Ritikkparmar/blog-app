import Link from "next/link";
import React from "react";
import { Button } from "../../button";
import SearchInput from "./search-input";
import ToggleMode from "../togglemode";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border border-b bg-background/95 backdrop-blur-md">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8 ">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold gap-2">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Dev
                </span>
                <span className="text-foreground">Threads</span>
              </span>
            </Link>
          </div>
          {/* desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/articles"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Articles
            </Link>
            <Link
              href="/tutorials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Tutorials
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
          </div>

          {/* Rightsection */}
          <div className=" flex items-center gap-4">
            <SearchInput/>
            <ToggleMode/>
            <div className="hidden md:flex items-center gap-4">
              <Button className="bg-black text-white rounded-md">Login</Button>
              <Button className="bg-black text-white rounded-md "> Signup</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
