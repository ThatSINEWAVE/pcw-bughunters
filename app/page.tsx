import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
        PCW Bug Hunters
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        The truth lies within the code
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href="/news"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          News
        </Link>
        <Link
          href={`/research${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Research
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Blog
        </Link>
      </div>
      <span className="flex flex-row items-center sm:gap-2 gap-1 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code text-base font-medium">
        <TerminalSquareIcon className="w-5 h-5 mr-2" />
        {"\"message\": \"HIDE ME PLEASE\""}
      </span>
    </div>
  );
}
