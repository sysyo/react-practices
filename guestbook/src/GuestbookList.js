import React from "react"
import GuestbookListItem from "./GuestbookListItem"

export default function ({datas}) {
    return (
        <ul className="Guestbook__List">
            {datas.map((data) => <GuestbookListItem
                                            title={data.title}
                                            content={data.content}
            /> ) }
        </ul>
    )
}




