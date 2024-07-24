import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
    let items = ["New York", "San Francisco", "Tokyo", "Paris", "London"];
    const handleSelectItem = (item: string) => console.log(item);

    const [alertVisible, setAlertVisible] = useState(false);
    return (
        <div>
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItem={handleSelectItem}
            />
            {alertVisible && (
                <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
            )}
            <Button
                color="primary"
                onClick={() =>
                    setAlertVisible(alertVisible === false ? true : false)
                }
            >
                My Button
            </Button>
        </div>
    );
}

export default App;
