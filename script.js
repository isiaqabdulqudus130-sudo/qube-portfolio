// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


// Make sure the menu elements exist

if (menuBtn && navMenu) {

    // Open / close mobile menu

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });


    // Close menu when a navigation link is clicked

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");

        });

    });

}


// =========================
// PORTFOLIO FILTER
// =========================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active state

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Activate clicked button

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        // Filter projects

        projectCards.forEach(function (project) {

            const category =
                project.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});

/* =========================
   PROJECT 01 CASE STUDY
========================= */

const projectOne = document.getElementById("project01");

const projectModal =
    document.getElementById("projectModal");

const projectModalClose =
    document.getElementById("projectModalClose");


if (
    projectOne &&
    projectModal &&
    projectModalClose
) {

    /* OPEN PROJECT */

    projectOne.addEventListener("click", function () {

        projectModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });


    /* CLOSE BUTTON */

    projectModalClose.addEventListener(
        "click",
        function () {

            projectModal.classList.remove("show");

            document.body.style.overflow = "";

        }
    );


    /* CLICK OUTSIDE */

    projectModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === projectModal
            ) {

                projectModal.classList.remove(
                    "show"
                );

                document.body.style.overflow = "";

            }

        }
    );


    /* ESCAPE KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                projectModal.classList.contains("show")
            ) {

                projectModal.classList.remove(
                    "show"
                );

                document.body.style.overflow = "";

            }

        }
    );

}

/* =========================
   PROJECT 02 CASE STUDY
========================= */

const projectTwo =
    document.getElementById("project02");

const projectModal02 =
    document.getElementById("projectModal02");

const projectModalClose02 =
    document.getElementById("projectModalClose02");


if (
    projectTwo &&
    projectModal02 &&
    projectModalClose02
) {

    /* OPEN PROJECT 02 */

    projectTwo.addEventListener(
        "click",
        function () {

            projectModal02.classList.add("show");

            document.body.style.overflow = "hidden";

        }
    );


    /* CLOSE BUTTON */

    projectModalClose02.addEventListener(
        "click",
        function () {

            projectModal02.classList.remove("show");

            document.body.style.overflow = "";

        }
    );


    /* CLICK OUTSIDE */

    projectModal02.addEventListener(
        "click",
        function (event) {

            if (
                event.target === projectModal02
            ) {

                projectModal02.classList.remove(
                    "show"
                );

                document.body.style.overflow = "";

            }

        }
    );


    /* ESCAPE KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                projectModal02.classList.contains("show")
            ) {

                projectModal02.classList.remove(
                    "show"
                );

                document.body.style.overflow = "";

            }

        }
    );

}

/* =========================
   PROJECT 03 CASE STUDY
========================= */

const projectThree =
    document.getElementById("project03");

const projectModal03 =
    document.getElementById("projectModal03");

const projectModalClose03 =
    document.getElementById("projectModalClose03");


if (
    projectThree &&
    projectModal03 &&
    projectModalClose03
) {

    /* OPEN PROJECT 03 */

    projectThree.addEventListener(
        "click",
        function () {

            projectModal03.classList.add("show");

            document.body.style.overflow = "hidden";

        }
    );


    /* CLOSE BUTTON */

    projectModalClose03.addEventListener(
        "click",
        function () {

            projectModal03.classList.remove("show");

            document.body.style.overflow = "";

        }
    );


    /* CLICK OUTSIDE MODAL */

    projectModal03.addEventListener(
        "click",
        function (event) {

            if (event.target === projectModal03) {

                projectModal03.classList.remove("show");

                document.body.style.overflow = "";

            }

        }
    );


    /* ESCAPE KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                projectModal03.classList.contains("show")
            ) {

                projectModal03.classList.remove("show");

                document.body.style.overflow = "";

            }

        }
    );


    /* CLOSE WHEN CLICKING CONTACT */

    const project03Contact =
        projectModal03.querySelector(
            'a[href="#contact"]'
        );


    if (project03Contact) {

        project03Contact.addEventListener(
            "click",
            function () {

                projectModal03.classList.remove(
                    "show"
                );

                document.body.style.overflow = "";

            }
        );

    }

}

// =========================
// DARUL QUR'AN PROJECT MODAL
// =========================

const darulQuranProject =
    document.getElementById("darulQuranProject");

const darulQuranModal =
    document.getElementById("projectModal01");

const darulQuranModalClose =
    document.getElementById("projectModalClose01");


if (
    darulQuranProject &&
    darulQuranModal &&
    darulQuranModalClose
) {

    darulQuranProject.addEventListener("click", function () {

        darulQuranModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });


    darulQuranModalClose.addEventListener(
        "click",
        function () {

            darulQuranModal.classList.remove("show");

            document.body.style.overflow = "";

        }
    );


    darulQuranModal.addEventListener(
        "click",
        function (event) {

            if (event.target === darulQuranModal) {

                darulQuranModal.classList.remove("show");

                document.body.style.overflow = "";

            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                darulQuranModal.classList.contains("show")
            ) {

                darulQuranModal.classList.remove("show");

                document.body.style.overflow = "";

            }

        }
    );


    const darulQuranContact =
        darulQuranModal.querySelector(
            'a[href="#contact"]'
        );


    if (darulQuranContact) {

        darulQuranContact.addEventListener(
            "click",
            function () {

                darulQuranModal.classList.remove("show");

                document.body.style.overflow = "";

            }
        );

    }

}

// =========================
// PROJECT 04 GRAPHICS MODAL
// =========================

const graphicsProject =
    document.getElementById("project04");

const graphicsModal =
    document.getElementById("projectModal04");

const graphicsModalClose =
    document.getElementById("projectModalClose04");


if (
    graphicsProject &&
    graphicsModal &&
    graphicsModalClose
) {

    graphicsProject.addEventListener(
        "click",
        function () {

            graphicsModal.classList.add("show");

            document.body.style.overflow = "hidden";

        }
    );


    graphicsModalClose.addEventListener(
        "click",
        function () {

            graphicsModal.classList.remove("show");

            document.body.style.overflow = "";

        }
    );


    graphicsModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === graphicsModal
            ) {

                graphicsModal.classList.remove("show");

                document.body.style.overflow = "";

            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                graphicsModal.classList.contains("show")
            ) {

                graphicsModal.classList.remove("show");

                document.body.style.overflow = "";

            }

        }
    );


    const graphicsContact =
        graphicsModal.querySelector(
            'a[href="#contact"]'
        );


    if (graphicsContact) {

        graphicsContact.addEventListener(
            "click",
            function () {

                graphicsModal.classList.remove("show");

                document.body.style.overflow = "";

            }
        );

    }

}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        formMessage.textContent = "Sending...";
        formMessage.className = "form-message";

        try {
            const response = await fetch("https://qube-portfolio-backend.onrender.com/api/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            });

            const data = await response.json();

            if (response.ok) {
                formMessage.textContent = "Message sent successfully! Thank you.";
                formMessage.className = "form-message success";

                contactForm.reset();
            } else {
                formMessage.textContent = data.message || "Something went wrong.";
                formMessage.className = "form-message error";
            }

        } catch (error) {
            console.error("Form error:", error);

            formMessage.textContent =
                "Unable to send your message. Please try again.";
            formMessage.className = "form-message error";
        }
    });
}