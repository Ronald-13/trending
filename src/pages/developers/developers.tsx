import Dropdown from '../../components/ui/dropdown/dropdown';
import Tab from '../../components/ui/tab/tab';
import Developer from '../../components/templates/developer/developer';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Developers = () => {
    const [trendingList, setTrendingList] = useState([]);

    useEffect(() => {
        axios.get('https://gh-trending-api.herokuapp.com/developers').then(result => {
            let trendingData = [] as any;
            trendingData = [ ...result.data ];
            setTrendingList(trendingData);
        });
    }, []);

    return <>
        <div className="container-b">
            <div className="block">
                <div className="block-header">
                    <Tab active="developers" />
                    {/* <Dropdown /> */}
                </div>
                <div className="block-list">
                {trendingList.map((el: any) => (
                    <Developer data={el} key={el.rank}/>
                    ))}
                </div>
            </div>
        </div>
    </>;
}