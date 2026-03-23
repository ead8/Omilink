"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
//2
export default function UserPageLink() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (!username) {
      fetch("/api/get")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.data !== null) {
            setUsername(data.data.username);
            setName(data.data.name);
          } else {
            setShow(true);
          }
          setShow(true);
        });
    }
  }, []);

  return (
    <div>
      {!username ? (
        <Alert className="rounded-2xl border-border/70 bg-card/70 p-3">
          <AlertTitle className="text-sm">Just so you know! </AlertTitle>
          <AlertDescription className="text-xs text-muted-foreground">
            Scroll down to publish your page and claim your personalized URL.
          </AlertDescription>
        </Alert>
      ) : (
        <div>
          <Alert className="rounded-2xl border-border/70 bg-card/70 p-3">
            <AlertTitle className="text-sm">
              Congrats {name?.split(" ")[0]}! your page is ready!{" "}
            </AlertTitle>
            <AlertDescription className="text-xs text-muted-foreground underline decoration-primary/45 underline-offset-4">
              <Link
                target="_blank"
                href={`https://${location.host}/${username}`}
              >
                https://{location.host}/{username}
              </Link>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
