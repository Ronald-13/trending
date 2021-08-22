import DropdownFilter from '../../components/ui/dropdown/dropdown';
import Tab from '../../components/ui/tab/tab';
import Article from '../../components/templates/article/article';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LANGUAGES } from '../../constants/dropdowns';

export const Repositories = () => {
    const [trendingList, setTrendingList] = useState([]);
    const [trendingListShown, setTrendingListShown] = useState([]);

    useEffect(() => {
        axios.get('https://gh-trending-api.herokuapp.com/repositories').then(result => {
            let trendingData = [] as any;
            trendingData = [ ...result.data ];
            setTrendingList(trendingData);
            setTrendingListShown(trendingData);
        });
    }, []);

    const handleLanguage = (key: string) => {
        if (key === 'Any'){
            setTrendingListShown(trendingList);
        }
        else {
            const newArr = trendingList.filter((el: any) => el?.language?.toLowerCase().indexOf(key?.toLowerCase()) !== -1);
            setTrendingListShown(newArr);
        }
    }

    return <>
        <div className="container-b">
            <div className="block">
                <div className="block-header">
                    <Tab active="repositories" />
                    <div className="dropdown"><DropdownFilter options={LANGUAGES} handleLanguage={handleLanguage}/></div>
                </div>
                <div className="block-list">
                {trendingListShown.map((el: any) => (
                    <Article data={el} key={el.rank}/>
                    ))}
                </div>
            </div>
        </div>
    </>;
}