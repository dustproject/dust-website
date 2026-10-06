"use client";

import dynamic from "next/dynamic";

const WithdrawContent = dynamic(() => import("./WithdrawContent"), {
  ssr: false,
});

export default function WithdrawPage() {
  return <WithdrawContent />;
}
