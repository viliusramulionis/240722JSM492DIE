import Button from '../button/Button.jsx';
import image from '../../assets/logo-with-shadow.png';
import style from './Intro.module.css';

const Intro = () => {
    // JSX atributas = propsas (prop)
    return (
        <div className="row align-items-center py-5">
            <div className="col-6">
                <h1 className={style.introHeading}>Vite</h1>
                <h2 className={style.subHeading}>Next Generation Frontend Tooling</h2>
                <p className={style.introText}>Get ready for a development environment that can finally catch up with you.</p>
            </div>
            <div className="col-6 text-center">
                <img src={image} style={{ maxWidth: 320 }} />
            </div>
            <div>
                <Button text="Get Started" />
                <Button text="Why vite?" />
                <Button text="View on GitHub" />
                <Button text="ViteConf 24" icon={true} />
            </div>
        </div>
    );
}

export default Intro;