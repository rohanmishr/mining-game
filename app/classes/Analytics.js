//log events, will be helpful for optimization and debugging
class Analytics {
    static events = [];
    static log(type, event) {
        this.events.push({
            type: type, 
            event: event
        })
    }
    static getErrs() {
        for(var i = 0; i < this.events.length; i++) {
            if(this.events[i].type == ("error" || "warning")) {
                return this.events[i];
            }
        }
    }
}