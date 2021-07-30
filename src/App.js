import { AppRouter } from "./routes/AppRouter";
import './index.css'
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";


function App() {

  return (
    <ApolloProvider client={ client }>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
