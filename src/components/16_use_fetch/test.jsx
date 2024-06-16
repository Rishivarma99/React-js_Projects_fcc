import useFetch from ".";
import "./style.css";
export default function UseFetchHookTest() {
  const { fetching, data, errorMsg } = useFetch(
    "https://dummyjson.com/products?limit=100&skip=0&select=title",
    {}
  );

  console.log(data);

  return (
    <>
      <div>
        <h1>Use Fetch</h1>
        {fetching && <div>The data is fetching</div>}

        {data.map((item) => {
          return (
            <h5 key={item.id} className="usefetch-names">
              {item.title}
            </h5>
          );
        })}
      </div>
    </>
  );
}
