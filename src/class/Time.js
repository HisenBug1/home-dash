export default class Time {
    constructor() {
        this.time = new Date()
        this.id = setInterval(() => this.tick(), 1000)
    }

    tick() {
        delete this.time
        this.time = new Date()
    }

    getDayAndDate() {
        const d = this.time
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = days[d.getDay()-1]+", "+months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()
        return date
    }

    getTime() {
        return this.time.toLocaleTimeString()
    }
}