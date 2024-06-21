import React, { useRef, useEffect, useState } from 'react'
import './cursoranim.css'

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lifetime = 0;
    }
}

export default function Cursoranim() {

    const Width = '20px'
    const Height = '20px'

    const Animation = () => {

        const points = [];

        const addPoint = (x, y) => {
            const point = new Point(x, y);
            points.push(point);
        };

        const duration = (0.7 * (1 * 1000)) / 60;

        window.onmousemove = (e) => {
            let x = e.clientX;
            let y = e.clientY;
            if (!points.length) {
                addPoint(x, y);
            }

            document.getElementsByClassName("anim")[0].style.transform = `translate(${x - 40}px , ${y - 40}px)`
        };

        for (let i = 0; i < points.length; ++i) {
            const point = points[i];
            let lastPoint;

            if (points[i - 1] !== undefined) {
                lastPoint = points[i - 1];
            } else lastPoint = point;

            point.lifetime += 1;
            console.log(points)

            if (point.lifetime > duration) {
                // If the point dies, remove it.
                points.shift();
            } else {
                document.getElementsByClassName("anim")[0].style.transform = `translate(${points.x - 40}px , ${points.y - 40}px)`
            }
        }
    }

    if (matchMedia("(pointer:fine)").matches) {
        Animation();
    }

    return (
        <>
            <div className='anim' style={{ width: { Width }, height: { Height } }}></div>
        </>
    )
}
