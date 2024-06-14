// import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  // const { count } = useSelector((state: RootState) => state.counter);

  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch()

  return (
    <>
      <h2 className="text-red-500">Tech Net</h2>
      <div className="">
        <div className=" text-2xl ml-[100px]">{count}</div>
        <button className="px-4 rounded-md mr-2 py-2 border-2 border-cyan-500" onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 border-2 rounded-md border-red-600">Decrement</button>
        <button onClick={() => dispatch(reset())} className="px-4 py-2 border-2 rounded-md border-red-600">Reset</button>
        <button onClick={() => dispatch(incrementByAmount(30))} className="px-4 py-2 border-2 rounded-md border-red-600">Increment By 30</button>

      </div>

    </>
  )
}

export default App
