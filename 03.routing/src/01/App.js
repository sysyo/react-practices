import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState('');

    useEffect(() => {
        // const handleHasheChange = () => console.log(window.location.hash);
        const handleHasheChange = () => setRoute(window.location.hash.substr(1));
        // event함수를 hash가 change될 때마다 실행

        // didmount - 이벤트 거는 장소, 통신 시작, 타이머 시작
        window.addEventListener('hashchange', handleHasheChange);
        return () => {
            // unmount - 이벤트 해지, 통신 불러오는, 타이머 해지
            window.removeEventListener('hashchange', handleHasheChange);
        };
    }, []);

    // return (<div>{`Hash Route 직접 만들어 보기: ${route}`}</div>);
    return (() => {
        switch(route){
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
    })();
}