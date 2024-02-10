import './Header.scss';
import headerImg from '../../assets/investment-calculator-logo.png';

export default function Header({title}) {
    return (
        <div id="scopedHeader">
            <header id="header">
                <img src={headerImg} alt="Money bag" />
                <h1>{title}</h1>
            </header>
        </div>
    );
}