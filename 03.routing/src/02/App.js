import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});

    useEffect(() => {
        const handlePopState = () => setRoute(e.state);

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const handleLinkClick = (e) => {
        e.preventDefault();

        const url = e.target.href.substr(e.target.href.lastIndexOf('/'));
        // 뒤로가기 지원
        window.history.pushState({page: url}, e.target.text, url);
        setRoute({page: url});
    }

    

    return (
        <div>
            {
                 (() => {
                    switch(route.page){
                        case '/' :
                            return <Main />;
                        case '/guestbook' :
                            return <Guestbook />;
                        case '/gallery' :
                            return <Gallery />;
                        default :
                            return null;
                    }
            
                    return <div>{`${route} 에 맞는 컴포넌트를 리턴 합니다.`}</div>
                })()
            }
            {/* <div>{route.page}</div> */}
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}