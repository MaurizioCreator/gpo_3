import React, {FC} from 'react';
import cs from "./btn.module.scss";

interface PropsBtn {
    children: React.ReactNode;
    className?: string
}

const Btn:FC<PropsBtn> = ({children, className}) => {
    return (
        <button className={cs.btn + " " + className}>{children}</button>
    );
};

export default Btn;