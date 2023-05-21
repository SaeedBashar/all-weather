import DarkModeToggle from 'react-dark-mode-toggle';
import { useDispatch, useSelector } from 'react-redux';

import { Search } from '../../search/searchElement';

import './start.scss';


export const Start = ()=>{
    const {theme} = useSelector((s:any)=>({
        theme: s.settings.theme,
        // unit: s.settings.unit
    }))
    const dispatch = useDispatch()

    return (
        <div className='start'>
            <div className="start-top">
                <h1 className="app-name">All Weather</h1>
                <div className="toggle">
                    <DarkModeToggle 
                        checked={theme === 'dark'} 
                        onChange={() => {
                            theme === 'dark' ?
                                dispatch({ type: "init_setTheme", theme: "light"}) :
                                dispatch({ type: "init_setTheme", theme: "dark"})
                        }} 
                    size={60} />
                </div>
            </div>
            <Search changeLocation={(value)=>dispatch({ type: "init_setCurrentLocation", location: value})}/>
        </div>
    )
}