import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Error</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="container vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-bold">404 Page Not Found</h1>
        <Link className="text-decoration-none mt-2" href="/landingpage/Home">
          Back To Landing Page
        </Link>
      </div>
    </>
  );
}
