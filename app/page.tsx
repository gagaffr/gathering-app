"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [number, setNumber] = useState<number | null>(null);

  useEffect(() => {
    const storedNumber = localStorage.getItem("groupNumber");
    if (storedNumber) {
      setNumber(Number(storedNumber));
    } else {
      const randomNumber = Math.floor(Math.random() * 12) + 1;
      localStorage.setItem("groupNumber", randomNumber.toString());
      setNumber(randomNumber);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Kelompok Kamu</h1>
      <h2 style={{ fontSize: "100px" }}>{number}</h2>
      <p>Simpan nomor ini ya!</p>
    </main>
  );
}
