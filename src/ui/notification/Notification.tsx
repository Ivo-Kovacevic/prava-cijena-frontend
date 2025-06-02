"use client";

import { useNotification } from "@/context/notificationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function Notification() {
  const { showNotification, notification } = useNotification();

  return (
    <div
      className={`fixed bottom-0 left-1/2 flex w-4/5 max-w-max -translate-x-1/2 items-center gap-4 rounded-outer bg-highlight p-4 text-primary shadow-md shadow-gray-500 transition ${showNotification ? "-translate-y-12" : "translate-y-full"}`}
    >
      <FontAwesomeIcon icon={faCircleInfo} />
      <p>{notification}</p>
    </div>
  );
}
