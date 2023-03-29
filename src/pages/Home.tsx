import React from "react";
import { ReactElement } from "react";
import Launches from "../components/Launches";
import Search from "../components/Search";
import { useAppSelector } from "../store";

const Home: React.FC = (): ReactElement => {
    const { launch } = useAppSelector(state => state);
    return (
        <React.Fragment>
            <Search />
            {
                launch.docs.length ? <Launches launches={launch.docs} /> : null
            }
        </React.Fragment>
    )
};

export default Home;