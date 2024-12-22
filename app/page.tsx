
import Image from "next/image";
import * as React from "react"

export default function Home() {
  return (
   <main className="text-red-500">Blogue
   <Image 
   src="/assets/images/logo.svg"
   width="200"
   height="200"
   alt="logo"
   />
   </main>
  );
}
