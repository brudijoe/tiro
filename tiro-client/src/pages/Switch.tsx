import { BsMoon, BsMoonFill, BsSun, BsSunFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export function Switch() {
  const iconClass = "p-1";

  return (
    <div className="m-1 h-10 w-20 flex flex-row items-center rounded-xl border-2 border-black dark:border-white dark:text-white">
      <div className="w-3/6 flex justify-center">
        <IconContext.Provider
          value={{
            color: "yellow",
            size: "2em",
            className: `${iconClass}`,
          }}
        >
          <BsMoon />
        </IconContext.Provider>
      </div>
      <div className="w-3/6 flex justify-center">
        <IconContext.Provider
          value={{
            color: "yellow",
            size: "2em",
            className: `${iconClass}`,
          }}
        >
          <BsSun />
        </IconContext.Provider>
      </div>
    </div>
  );
}
