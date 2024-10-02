export const extractFormData = (target) => {
    const data = {};
    
    const form = new FormData(target);

    for(const entry of form.entries()) {
        data[entry[0]] = entry[1];
    }
    
    return data;
}
