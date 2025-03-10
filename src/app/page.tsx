"use client";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/slice";
import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-3 gap-4">
        <h1 className="col-span-3 text-2xl font-bold text-center mb-2">
          Counter
        </h1>
        <Button
          className="mx-3"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span className="mx-auto text-center text-2xl font-bold">{count}</span>
        <Button
          className="mx-3"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}
