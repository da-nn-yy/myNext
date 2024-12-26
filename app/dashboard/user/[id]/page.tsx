const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
    return (


    <h1 className="text-4xl font-bold">
      User Details: {id}
    </h1>
    );
};

export default Page;
