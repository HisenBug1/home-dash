export default class Time {
    constructor() {
        this.time = new Date()
        this.id = setInterval(() => this.tick(), 1000)
    }

    tick() {
        clearInterval(this.id)
        this.time = new Date()
    }

    dayAndDate() {
        const d = this.time
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = days[d.getDay()]+", "+months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()
        return date
    }

    time() {
        return this.time.toLocalTimeString()
    }
}