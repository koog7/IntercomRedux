import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../app/store.ts";
import {addNum, clearArea, enter} from "./Counter/CounterSlice.tsx";

const Home = () => {

    const dispatch = useDispatch<AppDispatch>();
    const value = useSelector((state: RootState) => state.counter.value);
    const message = useSelector((state: RootState) => state.counter.message);
    const color = useSelector((state: RootState) => state.counter.color);
    const pincode = useSelector((state: RootState) => state.counter.pincode);
    const numlock = '1337';
    const addNumber = (value: string) => {
        dispatch(addNum(value));
    };
    const clear = () => {
        dispatch(clearArea())
    }

    const enterNum = () => {
        if (pincode === numlock) {
            dispatch(enter({ message: 'Granted', color: 'green' }));
        } else {
            dispatch(enter({ message: 'Denied', color: 'red' }));
        }
    };

    return (
        <div>
            <div className="container">
                <div style={{border: `1px solid ${color ? color : 'gray'}`}} className="display">{value}</div>
                <div style={{padding:'5px 0 10px 0'}}>Access: {message ? message : '.............'}</div>
                <div className="button-grid">
                    {['7', '8', '9', '4', '5', '6', '1', '2', '3'].map((num) => (
                        <button key={num} className="button" onClick={() => addNumber(num)}>
                            {num}
                        </button>
                    ))}
                    <button className="button" onClick={clear}>{'<'}</button>
                    <button className="button" onClick={() => addNumber('0')}>0</button>
                    <button className="button" onClick={enterNum}>E</button>
                </div>
            </div>
        </div>
    );
};

export default Home;