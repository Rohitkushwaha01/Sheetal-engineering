import Button from "./Button";
import { useContext } from "react";
import DataContext from "../../context/data.context";

export default function Frame() {
  const { Data } = useContext(DataContext);

  return (
    <>
      <div className="flex flex-col items-center xl:w-2/5 w-full m-auto gap-4 bg-gray-700 p-6">
        <div className="mt-[20px]">
          <img src={Data.img_url} alt="" className="rounded-[50%] w-32" />
        </div>
        <div className="text-center">
          <h1 className="font-head text-3xl">{Data.name}</h1>
          <h3 className="font-display">{Data.role}</h3>
        </div>
        <div className="font-display">
          <p>{Data.bio}!</p>
        </div>
        <div className="w-full">
          <Button />
        </div>
      </div>
    </>
  );
}
