import React, {useState, useEffect} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import data from './assets/json/data.json';

export default function Guestbook() {
    const [messages, setMessages] = useState(data);

    useEffect(() => {
        console.log('최초 메세지 리스트 가져오기');        
        fetchMessageList();
        // return function(){

        // };
    }, []); // [] 안붙이면 랜더링 할 때마다 호출 됨

    const notifyMessage = {
        add: function(message) {
            console.log('ajax posting.....');
            // 성공했다 가정
            message.no = 10;
            message.password = '';

            setMessages([message, ...messages]);
        },
        delete: function(no) {
            // console.log('메세지 상태에서 메세지 삭제', no);
            setMessages(messages.filter(message => message.no !== no));
        }
    }

    const fetchMessageList = () => {
        console.log('message list 가져오기');
    };

    return (
        <div className={styles.ScrollOuter}>
            <div>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}