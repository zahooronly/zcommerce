import prismadb from "@/lib/prismaDb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default async function SetupLaout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: {
      userID: userId as string,
    },
  });
  if (store) {
    redirect(`/${store.id}`);
  }
  return (
    <>
      {/* <div>This will be a Navbar</div> */}
      {children}
    </>
  );
}
