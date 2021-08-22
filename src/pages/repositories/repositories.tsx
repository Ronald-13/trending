import Dropdown from '../../components/ui/dropdown/dropdown';
import Tab from '../../components/ui/tab/tab';
import Article from '../../components/templates/article/article';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Repositories = () => {
    const [trendingList, setTrendingList] = useState([]);

    useEffect(() => {
        axios.get('https://gh-trending-api.herokuapp.com/repositories').then(result => {
            let trendingData = [] as any;
            trendingData = [ ...result.data ];
            setTrendingList(trendingData);
        });
    }, []);

    return <>
        <div className="container-b">
            <div className="block">
                <div className="block-header">
                    <Tab active="repositories" />
                    {/* <Dropdown /> */}
                </div>
                <div className="block-list">
                {trendingList.map((el: any) => (
                    <Article data={el} key={el.rank}/>
                    ))}
                </div>
            </div>
        </div>
    </>;
}