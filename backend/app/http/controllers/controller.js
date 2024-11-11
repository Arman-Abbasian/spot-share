class Controller {
    constructor() {
        this.bindAutoBind();
    }

    async bindAutoBind() {
        const autoBind = (await import('auto-bind')).default; // use .default if auto-bind exports as default
        autoBind(this);
    }

    testMethod() {
        return "Test String";
    }
}

module.exports = {
    Controller
};
