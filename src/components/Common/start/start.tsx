import DarkModeToggle from 'react-dark-mode-toggle';
import { useDispatch, useSelector } from 'react-redux';
import { init_setTheme } from '../../../store/reducers/settings';

import { Search } from '../../search/searchElement';

import './start.scss';


export const Start = ()=>{
    const theme = useSelector((s:any)=>s.settings.theme)
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
                                dispatch(init_setTheme({ theme: "light" })) :
                                dispatch(init_setTheme({ theme: "dark" }))
                        }} 
                    size={60} />
                </div>
            </div>
            <Search changeLocation={()=>{}}/>
        </div>
    )
}