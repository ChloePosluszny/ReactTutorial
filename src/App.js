import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Los Angeles", "Tokyo", "London"];
  const handleSelectItem = (item) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <Alert>
          Hello <span>World</span>
        </Alert>
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
