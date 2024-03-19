"use client";

import { Button } from "@mui/material";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function NavbarUserButton() {
  const { user, isLoaded } = useUser();
  return (
    isLoaded &&
    (user ? (
      <UserButton afterSignOutUrl="/home" />
    ) : (
      <Link href={"/auth/signin"}>
        <Button variant="contained">Login</Button>
      </Link>
    ))
  );
}
