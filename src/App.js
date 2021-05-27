import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
import Body from "./Body";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="App">
      <title>Weather Forecast</title>
      <Body />
      <Footer />
    </div>
  );
}