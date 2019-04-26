export const inTheatersMiddleware = (response) =>{
    return {records: response.data.data}
}
export const top250Middleware = (response) =>{
    return {records: response.data.data}
}
export const usBoxMiddleware = (response) =>{
    let data = response.data.data;
    let subjects = data.subjects;
    subjects = subjects.map(item =>({
        box: item.box,
        new: item.new,
        rank: item.rank,
        ...item.subject
    }))
    data.subjects = subjects
    return {records:data}
}