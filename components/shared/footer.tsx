import { APP_NAME } from "@/lib/constants";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-black  text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full  rounded-none "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Back to top
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-center  gap-3 text-sm">
          <Link href="/page/conditions-of-use">
            Conditions d&apos;utilisation
          </Link>
          <Link href="/page/privacy-policy"> Privacy Notice</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p> © 2025, {APP_NAME}, dev_irumva</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          234 rue Jean Jaures, 29200 Brest, France
        </div>
      </div>
    </footer>
  );
}
