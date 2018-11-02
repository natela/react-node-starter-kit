import * as React from 'react';

export class DateOfBirth {
    constructor(time) {
        this.date = new Date(time);
        this.age = Math.floor((Date.now()-time) / (1000*3600*24*365));
    }
    render() {
        const MONTH_NAMES =
            ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        return (
            <span>
                {this.date.getDate()} {MONTH_NAMES[this.date.getMonth()]} {this.date.getFullYear()} ({this.age} y.o.)
            </span>);
    }
}
