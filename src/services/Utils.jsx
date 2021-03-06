
const getData = (state, path, errorMessageIfNotFound = false) => {
    let data;

    try {
        if (typeof state === 'function') {
          throw new Error(
            'The state parameter must not be a function. The error is usually the usage of getState instead of getState(). Path is',
            path
          );
        }
        data = path.split('.').reduce((res, prop) => res[prop], state);
        if (errorMessageIfNotFound && data == null) {
          throw new Error('errorMessageIfNotFound');
        }
    }catch (error) {
        console.error(error);
        return null;
    }

    return data;
}

export { getData }