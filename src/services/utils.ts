

interface Request {
    resource: string | null;
    id: string | null;
    verb: string | null;
}



const Utils = {
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    parseRequestURL: () => {

        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/")
        // let request = {
        //     resource    : null,
        //     id          : null,
        //     verb        : null
        // }
        // request.resource    = r[1]
        // request.id          = r[2]
        // request.verb        = r[3]

        let request: Request = {
            resource: r[1] || null,
            id: r[2] || null,
            verb: r[3] || null
        }
        return request
    }

    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    , sleep: (ms: number | undefined) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default Utils;