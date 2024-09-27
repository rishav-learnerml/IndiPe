import { PrismaClient } from "@repo/db/client";
import React from "react";

const client = new PrismaClient()

export default function Home() {
  return <div>User App</div>;
}
