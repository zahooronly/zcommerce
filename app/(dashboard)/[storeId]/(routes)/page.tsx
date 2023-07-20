import prismadb from "@/lib/prismaDb";

interface DashboardPageProps {
  params: { storeId: string };
  //   Dashboard;
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store is {store?.name}</div>;
};

export default DashboardPage;
