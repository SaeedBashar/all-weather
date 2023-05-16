import DarkModeToggle from 'react-dark-mode-toggle';

import { Search } from '../../search/searchElement';

import './start.scss';


export const Start = ()=>{

    return (
        <div className='start'>
            <div className="start-top">
                <h1 className="app-name">All Weather</h1>
                <div className="toggle">
                    <DarkModeToggle checked={true} onChange={() => {}} size={60} />
                </div>
            </div>
            <Search changeLocation={()=>{}}/>
        </div>
    )
}