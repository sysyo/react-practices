import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// additional .. 꼭 필요하지 않음
import {library} from '@fortawesome/fontawesome-svg-core'; // 이 작업을 해야만 solid 방법을 사용할 수 있음
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

export default function () {
    library.add(faBell, fab, far); // 등록

    return (
        <div>
            {/* examples - 추천 (개별적으로 사용) */}
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faTimesCircle} />

            {/* solid - 기본이라서 지정 안해도 사용할 수 있음*/}
            <FontAwesomeIcon icon={["far", "bell"]} />
            <FontAwesomeIcon icon={"bell"} />
            
            {/* regular */}
            <FontAwesomeIcon icon={["fas", "bell"]} />
            /

            {/* examples */}
            <FontAwesomeIcon icon={["fab", "git"]} />
            <FontAwesomeIcon icon={["fab", "google"]} />
            <FontAwesomeIcon icon={["fab", "apple"]} />
        </div>
    )

}


