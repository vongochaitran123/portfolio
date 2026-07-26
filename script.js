/*==================================================
                DOM READY
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    navbarEffect();

    smoothScroll();

    activeMenu();

    revealAnimation();

    counterAnimation();

    backToTop();

});



/*==================================================
                STICKY NAVBAR
==================================================*/

function navbarEffect() {

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "rgba(255,255,255,.95)";
            header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

        }

        else {

            header.style.background = "rgba(255,255,255,.75)";
            header.style.boxShadow = "none";

        }

    });

}



/*==================================================
                SMOOTH SCROLL
==================================================*/

function smoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

}



/*==================================================
                ACTIVE MENU
==================================================*/

function activeMenu() {

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") == "#" + current) {

                link.classList.add("active");

            }

        });

    });

}



/*==================================================
                SCROLL REVEAL
==================================================*/

function revealAnimation() {

    const reveals = document.querySelectorAll(

        ".section,.card,.skill-card,.project-card,.timeline"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: .15

        }

    );

    reveals.forEach(item => {

        observer.observe(item);

    });

}



/*==================================================
                KPI COUNTER
==================================================*/

function counterAnimation() {

    const counters = document.querySelectorAll(".card h3");

    let started = false;

    window.addEventListener("scroll", () => {

        const kpi = document.querySelector(".kpi");

        if (!kpi) return;

        if (window.scrollY > kpi.offsetTop - 500 && !started) {

            started = true;

            counters.forEach(counter => {

                let target = counter.innerText.replace("+", "");

                target = parseInt(target);

                let count = 0;

                let speed = target / 80;

                const update = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText = Math.floor(count);

                        requestAnimationFrame(update);

                    }

                    else {

                        if (counter.innerText.includes("+")) {

                            counter.innerText = target + "+";

                        }

                        else {

                            counter.innerText = target;

                        }

                    }

                };

                update();

            });

        }

    });

}



/*==================================================
                BACK TO TOP
==================================================*/

function backToTop() {

    const button = document.createElement("button");

    button.innerHTML = "↑";

    button.className = "back-top";

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        }

        else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



/*==================================================
                PARALLAX HERO
==================================================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    let offset = window.scrollY;

    hero.style.backgroundPositionY = offset * 0.3 + "px";

});



/*==================================================
                PROJECT HOVER
==================================================*/

const projects = document.querySelectorAll(".project-card");

projects.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});



/*==================================================
                PRELOADER (OPTIONAL)
==================================================*/

// Có thể thêm sau nếu muốn



/*==================================================
                DARK MODE (COMING SOON)
==================================================*/

// Sẽ phát triển ở Version 2
