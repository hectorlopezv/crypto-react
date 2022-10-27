import { Button } from "@mui/material";
import { useStore } from "../store";
import { TransactionsGrid } from "./transactions-grid.component";

type Props = {};

function Home({}: Props) {
  const user = useStore((state) => state.user);
  const handleConnectCoinBase = () => {
    if (process.env.REACT_APP_COINBASE_AUTH_URL) {
      window.location.href = process.env.REACT_APP_COINBASE_AUTH_URL;
    }
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      {user?.isCoinbaseAuthorized ? (
        <TransactionsGrid />
      ) : (
        <Button
          variant="contained"
          size="large"
          onClick={handleConnectCoinBase}
        >
          connect coinbase
        </Button>
      )}
    </div>
  );
}

export default Home;
