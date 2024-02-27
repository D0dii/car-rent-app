import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center mt-8">
        My page
        <UserButton />
      </div>
    </main>
  );
}
