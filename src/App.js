import { AppRouter } from "./routes/AppRouter";
import './index.css'
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // wraps the app whit the apollo client
  return (
    <ApolloProvider client={ client }>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
