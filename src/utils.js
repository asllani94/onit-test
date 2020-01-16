const timeStampToDateString = (timestamp) => {
        return new Date(timestamp * 1000).toDateString();
}

export { timeStampToDateString }