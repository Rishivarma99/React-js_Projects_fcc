import useFetch from ".";

export default function UseFetchHookTest() {
  const { fetching, data, errorMsg } = useFetch(
    "https://dummyjson.com/products?limit=100&skip=0&select=title",
    {}
  );

  console.log(data.products);

  return (
    <>
      <div>
        <h1>Use Fetch</h1>
        {fetching && <div>The data is fetching</div>}

        {data.products.map((item) => {
          return (
            <center>
              <h5>{item.title}</h5>
            </center>
          );
        })}
      </div>
    </>
  );
}
