import { useLoaderData } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getStoreBook } from "../../assets/util/addToDb";

const colors = [
  "#1683F3",
  "#08BE98",
  "#FFB629",
  "#FF7A3D",
  "#FF0808",
  "#8B5CF6",
];

const CustomBar = ({ x, y, width, height, fill }) => {
  const middle = x + width / 2;
  const bottom = y + height;

  return (
    <path
      d={`
        M ${x} ${bottom}
        C ${x + width * 0.3} ${bottom},
          ${middle - width * 0.12} ${y + height * 0.25},
          ${middle} ${y}
        C ${middle + width * 0.12} ${y + height * 0.25},
          ${x + width * 0.7} ${bottom},
          ${x + width} ${bottom}
        Z
      `}
      fill={fill}
    />
  );
};

const PagesToRead = () => {
  const books = useLoaderData();
  const storedBookIds = getStoreBook().map(Number);

  const readBooks = books
    .filter((book) =>
      storedBookIds.includes(Number(book.bookId))
    )
    .map((book, index) => ({
      name: book.bookName,
      pages: Number(book.totalPages),
      color: colors[index % colors.length],
    }));

  return (
    <div className="mt-10 px-4">
      <div className="rounded-3xl bg-gray-50 px-4 py-10 sm:px-8">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Pages to Read
        </h1>

        {readBooks.length > 0 ? (
          <div className="h-125 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={readBooks}
                margin={{
                  top: 30,
                  right: 20,
                  left: 10,
                  bottom: 40,
                }}
              >
                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={true}
                />

                <XAxis
                  dataKey="name"
                  interval={0}
                  tick={{ fontSize: 13 }}
                  angle={0}
                  height={60}
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="pages"
                  shape={<CustomBar />}
                  maxBarSize={120}
                >
                  {readBooks.map((book, index) => (
                    <Cell
                      key={index}
                      fill={book.color}
                    />
                  ))}

                  <LabelList
                    dataKey="pages"
                    position="top"
                    fontWeight="bold"
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-600">
              No Books Added Yet
            </h2>

            <p className="mt-2 text-gray-500">
              Add books to your Read List to see the graph.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PagesToRead;