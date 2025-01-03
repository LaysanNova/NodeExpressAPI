class Log {
    info = text => {
        console.info(`[${getDate()}]`, "[INFO  ]", text);
    }
    warning = text => {
        console.info(`[${getDate()}]`, "[WARN]", text);
    }
    error = text => {
        console.info(`[${getDate()}]`, "[ERROR]", text);
    }
    // fatal

    server = text => {
        console.info(`[${getDate()}]`, "[SERVER]", text);
    }

    //api
    // runner
    // test
}

function getDate() {
    const date = new Date();

    return date.toLocaleString('en-US', { timeZoneName: 'short' });
}

const log = new Log();

export default log;