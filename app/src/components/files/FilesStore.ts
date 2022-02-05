import {makeAutoObservable, runInAction} from "mobx";
import {File} from "./FilesModel";

class FilesStore {
    files: File[] = []
    pending = true

    constructor() {
        makeAutoObservable(this)
        this.loadFiles()
    }

    async loadFiles() {
        const res = await fetch("http://localhost:8000/api/files?length=10", {})
        const data = await res.json()
        runInAction(() => {
            this.pending = false
            this.files = data
        })
    }
}

export default new FilesStore();