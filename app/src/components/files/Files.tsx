import React from 'react';
import FilesStore from "./FilesStore";
import {observer} from "mobx-react"

const Files: React.FC = () => {
    if (FilesStore.pending) {
        return (
            <div>
                Pending...
            </div>
        )
    }

    if (!FilesStore.files.length) {
        return (
            <div>
                No files
            </div>
        )
    }

    return (
        <div>{
            FilesStore.files.map(file => (
                <div style={{marginBottom: 58}}>{
                    Object.entries(file).map(([key, value]) => (
                        <p>
                            {key} : {value}
                        </p>
                    ))
                }</div>
            ))
        }</div>
    )
}

export default observer(Files);