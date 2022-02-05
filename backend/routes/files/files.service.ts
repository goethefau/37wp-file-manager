import {File} from "./files.model";

const {faker} = require('@faker-js/faker');

const getFiles = (length: number) => {
    const data: File[] = []

    for (let i = 0; i < length; i++) {
        data.push({
            lastModified: faker.date.past(),
            name: faker.system.fileName(),
            size: faker.datatype.number(10000),
            path: faker.system.filePath(),
        })
    }

    return data
}

export {getFiles}