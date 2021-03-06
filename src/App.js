import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="App">
      <title>Weather Forecast</title>
      <Weather defaultCity="New York" />
      <Footer />
    </div>
  );
}