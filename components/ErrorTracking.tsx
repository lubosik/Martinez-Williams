"use client";

import { useEffect } from "react";
import { setupErrorTracking } from "@/lib/error-tracking";

export default function ErrorTracking() {
  useEffect(() => {
    setupErrorTracking();
  }, []);

  return null;
}

