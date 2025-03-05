import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async() => {

    const {balance } = await getUserBalance();

  return (
    <>
      <h3>Your Balance</h3>
      <h2>Total: ${ addCommas(Number(balance? balance?.toFixed(2) : 0))}</h2>
    </>
  );
};

export default Balance;
