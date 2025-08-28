document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 500, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#d4af37" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": false },
            "move": { "enable": true, "speed": 0.3, "direction": "none", "random": true, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": false }, "onclick": { "enable": false } },
            "modes": {}
        },
        "retina_detect": true
    });

    let pJS = window.pJSDom[0].pJS;
    let mouse = { x: null, y: null, vx: 0, vy: 0, px: null, py: null };

    window.addEventListener("mousemove", function(event) {
        if (mouse.px !== null && mouse.py !== null) {
            mouse.vx = event.clientX - mouse.px;
            mouse.vy = event.clientY - mouse.py;
        }
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        mouse.px = event.clientX;
        mouse.py = event.clientY;
    });

    function waterEffect() {
        pJS.particles.array.forEach(p => {
            if (mouse.x && mouse.y) {
                let dx = p.x - mouse.x;
                let dy = p.y - mouse.y;
                let dist = Math.sqrt(dx*dx + dy*dy);

                if (dist < 120) { // effect radius
                    // particles get nudged in the direction of mouse movement
                    p.vx += mouse.vx * 0.002;
                    p.vy += mouse.vy * 0.002;
                }
            }
        });
        requestAnimationFrame(waterEffect);
    }

    waterEffect();
});
