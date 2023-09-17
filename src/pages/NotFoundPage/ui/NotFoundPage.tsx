import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => (
    <div className={s.not}>
        <h1>404 Page Not Found</h1>
        <Link to="./" className={s.back}>Back to Main page</Link>
    </div>
);

export default NotFoundPage;
