/* import Head from "next/head";
import Layout from "../../layout/layout";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import styles from "../styles/login.module.css";

export default function Login() {
  const { data: session } = useSession();
  console.log(session);

  async function handleGoogleSignin() {
    try {
      signIn("google", { callbackUrl: "http://localhost:3000" });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <section className="text-center w-3/4 mx-auto flex flex-col gap-8">
        <div className="title">
          <h1 className="text-gray-80 text-4xl font-bold py-2">Explore</h1>
          <p className="w-3/3 mx-auto text-gray-500">
            Signup go post your thoughts and comment on others posts.
          </p>
        </div>
        <form className="flex flex-col gap-3.5">
          <div className="input-button"></div>
          <Link href={"/"} className="input-button">
            <button
              onClick={handleGoogleSignin}
              type="button"
              className={styles.button_custom}
            >
              Signin with Google
              <Image
                src={"assets/google.svg"}
                width={25}
                height={25}
                alt={"Google Logo"}
              ></Image>
            </button>
          </Link>
        </form>
      </section>
    </div>
  );
} */

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </li>
  );
}
