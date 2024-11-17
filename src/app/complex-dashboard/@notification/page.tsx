import Link from "next/link";
import React from "react";

export default function NotificationPage() {
  return (
    <div>
      Notifications
      <Link href="/complex-dashboard/archieved">Archieved</Link>
    </div>
  );
}
