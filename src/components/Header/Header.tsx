import {useState} from "react";

const Header = () => {
    const [balance, setBalance] = useState<number>(100)

    const updateBalance = (amount: number) => {
        setBalance(prev => prev + amount);
    };
    return (
        <header></header>
    )

}
export default Header