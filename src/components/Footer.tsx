import Styles from "@components/Footer.module.scss";

const Footer: React.FC<{}> = () => {
    return (
        <footer id = {Styles.footer}>
            <p>https://ephemeralxxv.github.io/ Copyright <span style = {{fontFamily: "sans-serif"}}>&copy;</span> Project Guru, 2022. All rights reserved.</p>
        </footer>
    );
}

export default Footer;