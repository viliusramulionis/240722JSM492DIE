export const extractFormData = (target) => {
    const data = {};
    
    const form = new FormData(target);

    for(const entry of form.entries()) {
        data[entry[0]] = entry[1];
    }
    
    return data;
}

export const random = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
