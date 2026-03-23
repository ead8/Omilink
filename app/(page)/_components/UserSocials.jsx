"use client";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Share2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import LinkCard from "./card";

import { Icons } from "./icons";
import { FaCheckCircle } from "react-icons/fa";

export default function UserSocials({ userDataName }) {
  const [loading, setLoading] = useState(true);

  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");

  const [links, setLinks] = useState([]);

  const [showPrivate, setShowPrivate] = useState(false);
  const [inputKey, setInputKey] = useState("");
  const [error, setError] = useState(false);
  const [accessError, setAccessError] = useState(false);

  const handleInput = () => {
    if (!inputKey) return;

    if (inputKey === links.accessKey) {
      setShowPrivate(true);
      setAccessError(false);
    } else {
      setAccessError(true);
      setShowPrivate(false);
    }
  };

  useEffect(() => {
    let username = userDataName;
    try {
      fetch("/api/page/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          if (data.data !== null) {
            setImage(data.data.image);
            setName(data.data.name);
            setBio(data.data.bio);
            setLinks(data.data);
          } else {
            setError(true);
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const professional = [
    "linkedin",
    "github",
    "stackoverflow",
    "leetcode",
    "codeforces",
    "hackerrank",
    "codechef",
    "geeksforgeeks",
  ];
  const social = [
    "youtube",
    "instagram",
    "facebook",
    "snapchat",
    "twitter",
    "threads",
    "reddit",
  ];
  const creative = ["twitch", "soundcloud", "spotify", "applemusic"];
  const messaging = ["discord", "telegram", "whatsapp", "skype"];
  const storefront = [
    "amazon",
    "shopify",
    "ko-fi",
    "buy me a coffee",
    "patreon",
  ];
  const miscellaneous = ["website", "blog", "email", "phone"];

  return (
    <div className="app-shell relative grid place-content-center overflow-x-hidden py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,color-mix(in_oklch,var(--primary)_26%,transparent),transparent)]"></div>
      <div
        onClick={() => {
          navigator.share({ url: location.href, title: name, text: name });
        }}
        className="fixed right-5 top-5 md:right-10 md:top-8"
      >
        <Button
          variant="pulseBtn"
          className="flex h-10 w-10 items-center justify-center rounded-full p-0"
        >
          <Share2 className="w-4 h-4" />
        </Button>
      </div>
      <div className="mb-4 mt-12 grid place-content-center">
        {!image && <Skeleton className="h-24 w-24 rounded-full" />}

        {image && (
          <div className="relative w-32 h-32 rounded-full flex items-center justify-center bg-transparent">
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full z-10 bg-background"
            />
          </div>
        )}
      </div>
      <div className="mb-8 grid place-content-center gap-3 px-2 text-center">
        <h1 className="text-3xl font-bold flex justify-center items-center text-center">
          {name}
          {name && <FaCheckCircle className="!h-4 !w-4 opacity-50 ml-2" />}
        </h1>

        <p className="mx-auto max-w-[420px] text-base text-muted-foreground sm:line-clamp-2 line-clamp-none">
          {bio?.length > 70 ? bio.slice(0, 70) : bio}
        </p>
      </div>

      {loading && <Skeleton className="mx-auto mb-5 h-8 w-40" />}
      {loading && <Skeleton className="mx-auto mb-5 h-14 w-[300px]" />}

      {loading && (
        <div className="grid gap-3 max-w-[600px]">
          <Skeleton className="h-14 w-[300px] mx-auto" />
          <Skeleton className="h-14 w-[300px] mx-auto" />
          <Skeleton className="h-14 w-[300px] mx-auto" />
          <Skeleton className="h-14 w-[300px] mx-auto" />
        </div>
      )}

      {!loading && (
        <div className="grid mt-10 gap-3">
          {Object.entries(links)
            .filter(([key]) => social.includes(key))
            .map(([key, value]) => {
              return typeof value === "string" ? (
                <LinkCard
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  href={value}
                  icon={Icons[key]}
                />
              ) : null;
            })}
          {Object.entries(links)
            .filter(([key]) => professional.includes(key))
            .map(([key, value]) => {
              return typeof value === "string" ? (
                <LinkCard
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  href={value}
                  icon={Icons[key]}
                />
              ) : null;
            })}
          {Object.entries(links)
            .filter(([key]) => creative.includes(key))
            .map(([key, value]) => {
              return typeof value === "string" ? (
                <LinkCard
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  href={value}
                  icon={Icons[key]}
                />
              ) : null;
            })}
          {Object.entries(links)
            .filter(([key]) => messaging.includes(key))
            .map(([key, value]) => {
              return typeof value === "string" ? (
                <LinkCard
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  href={value}
                  icon={Icons[key]}
                />
              ) : null;
            })}
          {Object.entries(links)
            .filter(([key]) => storefront.includes(key))
            .map(([key, value]) => {
              return typeof value === "string" ? (
                <LinkCard
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  href={value}
                  icon={Icons[key]}
                />
              ) : null;
            })}

          {links.accessKey && (
            <div className="mx-auto mt-10 max-w-[460px] rounded-2xl border border-border/70 bg-card/70 px-4 py-3">
              <p className="mb-2 text-sm font-medium text-foreground">Private links</p>
              <div className="flex items-center gap-2">
                <Input
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  placeholder="Enter Access Key"
                />
                <Button onClick={handleInput} className="rounded-xl">Unlock</Button>
              </div>
              {accessError && (
                <p className="mt-2 text-sm text-red-500">Invalid Access Key</p>
              )}
              {showPrivate && (
                <div className="mt-4 grid gap-3">
                  {Object.entries(links)
                    .filter(([key]) => miscellaneous.includes(key))
                    .map(([key, value]) => {
                      return typeof value === "string" ||
                        typeof value === "number" ? (
                        <LinkCard
                          className="!w-full !h-12"
                          key={key}
                          title={key.charAt(0).toUpperCase() + key.slice(1)}
                          href={
                            key == "email"
                              ? `mailto:${value}`
                              : key == "phone"
                                ? `tel:${value}`
                                : key == "website"
                                  ? value
                                  : key == "blog" && value
                          }
                          icon={Icons[key]}
                        />
                      ) : null;
                    })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {error && (
        <div className="-mt-20 mb-20 grid place-content-center">
          <h1 className="font-bold text-center text-3xl mt-5">
            User not found.<span className="text-primary">.</span>
          </h1>
          <p className="text-center text-sm mt-2">
            Please double-check the username <br /> and try again.
          </p>
          <Button asChild className="mx-auto mt-5 w-full max-w-sm rounded-xl">
            <Link href="/">Back</Link>
          </Button>
        </div>
      )}
      <div className="mt-20 -mb-20">
        <Footer />
      </div>
    </div>
  );
}
