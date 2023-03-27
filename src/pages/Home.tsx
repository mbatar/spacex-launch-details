import React from "react";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Launches from "../components/Launches";
import { useAppSelector } from "../store";

const Home: React.FC = (): ReactElement => {
    const { launch } = useAppSelector(state => state);

    return (
        <React.Fragment>
            {
                launch.docs.length ? <Launches launches={launch.docs} /> : null
            }
        </React.Fragment>
    )
};

export default Home;