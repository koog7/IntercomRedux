import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../app/store.ts";
import {addNum, clearArea} from "./Counter/CounterSlice.tsx";

const Home = () => {

    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    const addNumber = (value: string) => {
        dispatch(addNum(value));
    };
    const clear = () => {
        dispatch(clearArea())
    }
    return (
        <div>
            <div className="container">
                <div className="display">{value}</div>
                <div className="button-grid">
                    {['7', '8', '9', '4', '5', '6', '1', '2', '3'].map((num) => (
                        <button key={num} className="button" onClick={() => addNumber(num)}>
                            {num}
                        </button>
                    ))}
                    <button className="button" onClick={clear}>{'<'}</button>
                    <button className="button">0</button>
                    <button className="button">E</button>
                </div>
            </div>
        </div>
    );
};

export default Home;