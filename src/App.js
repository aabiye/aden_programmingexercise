import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router,  Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./components/Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="App">
            <Header></Header>
            <Switch>
              <Routes />
            </Switch>
            <Footer></Footer>
          </div>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
