/** @jsxImportSource react */
import { useStore } from "@nanostores/react";
import { qwikify$ } from "@builder.io/qwik-react";
import { $count } from "@/store/counter";

const QCounterValue = () => {
  const countValue = useStore($count);

  return (
    <div className="card bg-base-content hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-400 transition-all duration-500">
      <div className="card-body text-info">
        <h2 className="card-title text-info">{countValue}</h2>

        <p className="mb-4 text-info">
          This is qwik client component created from a react component using
          nanoStore/react to get the value
        </p>
      </div>
    </div>
  );
};

export default qwikify$(QCounterValue, { eagerness: "load" });
