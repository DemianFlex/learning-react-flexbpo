import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="w-full text-center">
            <div className="p-5 my-5">
                <h1>{count}</h1>
            </div>

            <div className="flex justify-center">
                <h1 onClick={() => setCount(count + 1)} className="p-3 me-4">
                    Plus
                </h1>
                <h1 onClick={() => setCount(count - 1)} className="p-3 ms-4">
                    Minus
                </h1>
            </div>
        </div>
    );
};

export default Counter;
