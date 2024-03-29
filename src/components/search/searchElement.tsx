import { useState } from 'react';
import './search.scss';

export const Search = ({changeLocation}: {changeLocation:(e:any)=>void})=>{
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchInputChanged = (e: any) => {
        setSearchTerm(e.target.value);
    };
    
    return (
        <div className="search">
            <input 
            placeholder="Location"
            onChange={onSearchInputChanged}
            onKeyPress={(e)=>{
                if (e.key === "Enter") {
                    changeLocation((e.target as HTMLInputElement).value);
                }
            }} className="searchInput" type="text" />
            <button onClick={()=>changeLocation(searchTerm)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path d="M10.887-.032a.982.982,0,0,0-.106.026.846.846,0,0,0-.66.845v.9a9.286,9.286,0,0,0-8.389,8.393H.758a.845.845,0,0,0,.079,1.689h.9a9.286,9.286,0,0,0,8.389,8.393v.9a.844.844,0,1,0,1.688,0v-.9A9.286,9.286,0,0,0,20.2,11.818h.9a.845.845,0,1,0,0-1.689h-.9a9.286,9.286,0,0,0-8.389-8.393v-.9a.845.845,0,0,0-.923-.871Zm-.765,4.3v.792a.844.844,0,1,0,1.688,0V4.27a6.743,6.743,0,0,1,5.856,5.859H16.8a.845.845,0,0,0,.079,1.689h.791a6.743,6.743,0,0,1-5.856,5.859v-.792a.844.844,0,1,0-1.688,0v.792a6.743,6.743,0,0,1-5.856-5.859h.791a.845.845,0,1,0,0-1.689H4.266A6.743,6.743,0,0,1,10.122,4.27Z" transform="translate(0.048 0.036)"/></svg>
            </button>
        </div>
    )
}
