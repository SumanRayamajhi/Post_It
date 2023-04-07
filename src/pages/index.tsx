import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <Navbar />
      <div className="flex justify-center items-center mt-8">
        <div>
          <p>Welcome {session?.user?.name}</p>
        </div>
      </div>
    </div>
  );
}
