import sql from "~/lib/db";

export default async function Home() {
  // console.log("PGHOST", process.env.PGHOST);
  // console.log("PGDATABASE", process.env.PGDATABASE);
  // console.log("PGUSER", process.env.PGUSER);
  // console.log("PGPASSWORD", process.env.PGPASSWORD);
  // console.log("PGPORT", process.env.PGPORT);

  async function getElements() {
    const users = await sql`
    select
      *
    from elements
  `;
    // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
    return users;
  }

  const elements = await getElements();

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1A1A1A]">
      <h1>new branch</h1>
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {elements.map((element) => (
          <li
            key={element.id}
            className="relative flex flex-col text-center p-5 rounded-md bg-[#00E699] transition-colors hover:bg-[#00e5BF] text-[black]"
          >
            <p className="absolute top-2 left-2 text-sm">
              {element.atomicNumber}
            </p>
            <h2 className="text-2xl font-medium">{element.symbol}</h2>
            <p className="text-base">{element.elementName}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
