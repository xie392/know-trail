import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="flex-shrink-0" href="/">
      <h1 className="mr-5 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-xl font-bold text-transparent">
        KnowTrail
      </h1>
    </Link>
  );
};
