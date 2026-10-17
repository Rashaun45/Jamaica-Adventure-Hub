

/* ---------- DATA ---------- */

// Categories match the tiles on the home page.
// "Food & Drink" is not here: that tile links to eats.html instead.
const activityCategories = [
    { name: "Things to Do",         slug: "things-to-do" },
    { name: "Our People & Culture", slug: "culture" },
    { name: "Beaches",              slug: "beaches" },
    { name: "Waterfalls & Rivers",  slug: "waterfalls" },
    { name: "Events",               slug: "events" }
];

// NOTE: prices and times are sample information for this project.
const activities = [
    /* ----- Things to Do ----- */
    { id: 1, name: "Ocho Rios Zipline Canopy", category: "Things to Do", location: "Ocho Rios, St. Ann",
      duration: "2.5 hours", bestTime: "Morning, dry season (Dec to Apr)", bring: "Closed-toe shoes, sunscreen", price: 95,
      description: "Soar above the rainforest canopy on a series of ziplines with views all the way down to the sea.",
      tips: "Guests must meet the weight and age limits set by the operator. Wear comfortable clothes that you don't mind getting dusty.",
      image: "images/zipline.jpg" },
    { id: 2, name: "Blue Mountain Sunrise Hike", category: "Things to Do", location: "Blue Mountains, Portland / St. Andrew",
      duration: "8 hours", bestTime: "Jan to Apr, clear mornings", bring: "Warm layers, water, torch", price: 80,
      description: "Start before dawn and reach Blue Mountain Peak for sunrise views, then finish with fresh Blue Mountain coffee.",
      tips: "It is cold at the summit before sunrise. Moderate fitness is needed. The trail can be slippery after rain.",
      image: "images/blue-mountain.jpg" },
    { id: 3, name: "Horseback Ride & Swim", category: "Things to Do", location: "Negril, Westmoreland",
      duration: "2 hours", bestTime: "Morning or late afternoon", bring: "Swimwear, towel, hat", price: 85,
      description: "Ride along the shoreline, then take your horse into the sea for a gentle swim in warm Caribbean water.",
      tips: "Suitable for beginners. A guide stays with every group.",
      image: "images/horseback.jpg" },

    /* ----- Our People & Culture ----- */
    { id: 4, name: "Bob Marley Museum Tour", category: "Our People & Culture", location: "56 Hope Road, Kingston",
      duration: "1.5 hours", bestTime: "Weekday mornings", bring: "Camera (check photo rules)", price: 30,
      description: "Walk through the legend's former home and studio and learn the story behind the music that changed the world.",
      tips: "Tours run on a schedule, so arrive 15 minutes early.",
      image: "images/bob-marley.jpg" },
    { id: 5, name: "Port Royal History Walk", category: "Our People & Culture", location: "Port Royal, Kingston",
      duration: "2 hours", bestTime: "Morning, before the heat", bring: "Hat, water, walking shoes", price: 35,
      description: "Explore the once-notorious pirate capital, its old fort and the story of the sunken city.",
      tips: "Combine it with fresh fried fish at a nearby seaside restaurant.",
      image: "images/culture.jpg" },
    { id: 6, name: "Accompong Maroon Village Visit", category: "Our People & Culture", location: "Accompong, St. Elizabeth",
      duration: "6 hours", bestTime: "Dry season; annual festival around 6 January", bring: "Comfortable shoes, some cash for crafts", price: 60,
      description: "Meet the descendants of the Maroons, hear their history of freedom and resistance, and taste local food.",
      tips: "Please ask before taking photos of people. The drive is long, so start early.",
      image: "images/maroon.jpg" },

    /* ----- Beaches ----- */
    { id: 7, name: "Seven Mile Beach Day", category: "Beaches", location: "Negril, Westmoreland",
      duration: "Full day", bestTime: "Late afternoon for sunset", bring: "Swimwear, sunscreen, cash for vendors", price: 20,
      description: "Relax on seven miles of white sand with calm turquoise water, beach bars and plenty of water sports.",
      tips: "The beach is busiest on weekends. Walk further along for quieter spots.",
      image: "images/seven-mile.jpg" },
    { id: 8, name: "Doctor's Cave Beach", category: "Beaches", location: "Montego Bay, St. James",
      duration: "Half day", bestTime: "Morning", bring: "Swimwear, reef-safe sunscreen", price: 15,
      description: "A famous, clear-water beach with changing rooms and loungers, just minutes from the Montego Bay strip.",
      tips: "There is an entrance fee. Lockers are available for valuables.",
      image: "images/doctors-cave.jpg" },
    { id: 9, name: "Winnifred Beach", category: "Beaches", location: "Fairy Hill, Portland",
      duration: "Half day", bestTime: "Weekdays", bring: "Swimwear, snorkel, cash for food", price: 10,
      description: "A relaxed, locally loved beach with calm water, shady trees and simple food stalls.",
      tips: "Very busy on Sundays when locals come to enjoy the day.",
      image: "images/winnifred.jpg" },

    /* ----- Waterfalls & Rivers ----- */
    { id: 10, name: "Dunn's River Falls", category: "Waterfalls & Rivers", location: "Ocho Rios, St. Ann",
      duration: "3 hours", bestTime: "Early morning to beat the crowds", bring: "Water shoes, swimwear, towel", price: 25,
      description: "Climb the famous terraced waterfall hand-in-hand with a guide and swim in the pools along the way.",
      tips: "Wear water shoes, since the rocks are slippery. Lockers are available.",
      image: "images/dunns-river.jpg" },
    { id: 11, name: "Rio Grande Bamboo Rafting", category: "Waterfalls & Rivers", location: "Port Antonio, Portland",
      duration: "3 hours", bestTime: "Morning", bring: "Sunscreen, hat, light rain jacket", price: 65,
      description: "Drift down the Rio Grande on a traditional bamboo raft steered by an experienced raftsman.",
      tips: "Rafts hold two adults. Life jackets are provided.",
      image: "images/rafting.jpg" },
    { id: 12, name: "YS Falls", category: "Waterfalls & Rivers", location: "St. Elizabeth",
      duration: "3 hours", bestTime: "Weekdays, dry season", bring: "Swimwear, water shoes, towel", price: 30,
      description: "Tiered waterfalls with a rope swing, natural pools and a tractor ride through a scenic estate.",
      tips: "Changing rooms and a restaurant are on site.",
      image: "images/ys-falls.jpg" },

    /* ----- Events ----- */
    { id: 13, name: "Reggae Sumfest", category: "Events", location: "Montego Bay, St. James",
      duration: "Multi-night", bestTime: "Usually July", bring: "Light clothing, rain poncho, cash", price: 90,
      description: "One of the Caribbean's biggest music festivals, with reggae and dancehall stars across several nights.",
      tips: "Confirm festival dates and ticket tiers before booking.",
      image: "images/sumfest.jpg" },
    { id: 14, name: "Treasure Beach Food, Rum & Reggae Festival", category: "Events", location: "Treasure Beach, St. Elizabeth",
      duration: "1 day", bestTime: "Usually early November", bring: "Cash, sunhat, sandals", price: 45,
      description: "Local chefs, rum makers and reggae artists come together on the sunny south coast for a day of food and music.",
      tips: "Book accommodation early because the area is small.",
      image: "images/event1.jpg" },
    { id: 15, name: "Carnival in Jamaica", category: "Events", location: "Kingston",
      duration: "Multi-day", bestTime: "Usually spring (check dates)", bring: "Costume or colourful clothes, water, sunscreen", price: 40,
      description: "Colourful parades, soca music and costumes fill the streets of Kingston in a week of celebration.",
      tips: "Costume packages are priced separately. Confirm the schedule before you travel.",
      image: "images/event3.jpg" }
];

const eats = [
    { name: "Scotchies", category: "Jerk", location: "Montego Bay", blurb: "Smoky jerk chicken and pork cooked over pimento wood, served with festival and breadfruit.", image: "images/scotchies.jpg" },
    { name: "Devon House I-Scream", category: "Dessert", location: "Kingston", blurb: "Famous scoops in flavours like rum & raisin and soursop, enjoyed on the Devon House grounds.", image: "images/devon-house.jpg" },
    { name: "Hellshire Beach Fish Huts", category: "Seafood", location: "St. Catherine", blurb: "Fried or steamed fish with bammy and festival, eaten steps from the water.", image: "images/hellshire.jpg" },
    { name: "Boston Bay Jerk Centre", category: "Jerk", location: "Portland", blurb: "The birthplace of jerk, with open-air pits and generous portions.", image: "images/boston-bay.jpg" },
    { name: "Blue Mountain Coffee Farm", category: "Coffee", location: "Blue Mountains", blurb: "Tour the estate, see how the beans are processed and taste a fresh cup.", image: "images/coffee-farm.jpg" },
    { name: "Patty Shop Stop", category: "Snacks", location: "Island-wide", blurb: "A flaky beef or vegetable patty in coco bread is the classic quick bite.", image: "images/patty.jpg" }
];

/* ---------- HELPERS ---------- */

function findActivity(id) {
    return activities.find(function (a) { return a.id === Number(id); });
}

// Builds one Bootstrap card. `item.info` (optional) is a list of [label, value] pairs.
function buildCard(item, info, footerHtml) {
    let infoHtml = "";
    if (info && info.length > 0) {
        infoHtml = '<ul class="list-unstyled small mb-3">';
        for (const pair of info) {
            infoHtml += `<li><strong>${pair[0]}:</strong> ${pair[1]}</li>`;
        }
        infoHtml += "</ul>";
    }
    return `
    <div class="col-12 col-md-6 col-lg-4">
        <article class="card h-100 shadow-sm">
            <div class="card-img-wrap">
                <span class="img-fallback">${item.name}</span>
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.remove()">
            </div>
            <div class="card-body d-flex flex-column">
                <span class="badge badge-cat align-self-start mb-2">${item.category}</span>
                <h3 class="h5 card-title">${item.name}</h3>
                <p class="card-text">${item.description || item.blurb}</p>
                ${infoHtml || '<p class="text-muted small">' + item.location + "</p>"}
                <div class="mt-auto">${footerHtml}</div>
            </div>
        </article>
    </div>`;
}

// Shared filter-button builder for the Eats page
function buildFilters(containerId, items) {
    const categories = ["All"];
    for (const item of items) {
        if (!categories.includes(item.category)) categories.push(item.category);
    }
    let html = "";
    categories.forEach(function (cat, index) {
        html += `<button type="button" class="filter-btn${index === 0 ? " active" : ""}" data-category="${cat}">${cat}</button>`;
    });
    $(containerId).html(html);
}

// Bootstrap toast (container is created on first use)
function showToast(message, type) {
    if (!document.getElementById("toast-area")) {
        const area = document.createElement("div");
        area.id = "toast-area";
        area.className = "toast-container position-fixed bottom-0 end-0 p-3";
        document.body.appendChild(area);
    }
    const el = document.createElement("div");
    el.className = "toast align-items-center text-bg-" + (type || "success") + " border-0";
    el.setAttribute("role", "alert");
    el.innerHTML = `<div class="d-flex"><div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>`;
    document.getElementById("toast-area").appendChild(el);
    new bootstrap.Toast(el, { delay: 4000 }).show();
    el.addEventListener("hidden.bs.toast", function () { el.remove(); });
}

/* ---------- BOOK NOW: start the booking flow ----------
   Called by every "Book Now" button. It saves which activity was chosen,
   then sends the visitor to the booking page, which reads it and fills
   in the form (see initBooking). */
function startBooking(activityId) {
    const activity = findActivity(activityId);
    if (!activity) return;                       // safety check
    try {
        sessionStorage.setItem("pendingBooking", JSON.stringify({ activityId: activity.id }));
    } catch (err) {
        console.warn("sessionStorage unavailable", err);
    }
    window.location.href = "book.html";
}

/* ---------- ACTIVITIES PAGE ---------- */
function initActivities() {
    const list = document.getElementById("activity-list");
    if (!list) return;

    let currentCategory = "All";
    let searchText = "";

    // Home-page tiles link here with ?category=beaches etc.
    const wantedSlug = new URLSearchParams(window.location.search).get("category");
    const wanted = activityCategories.find(function (c) { return c.slug === wantedSlug; });
    if (wanted) currentCategory = wanted.name;

    // Build filter buttons from the categories array
    let filterHtml = `<button type="button" class="filter-btn${currentCategory === "All" ? " active" : ""}" data-category="All">All</button>`;
    activityCategories.forEach(function (c) {
        const active = c.name === currentCategory ? " active" : "";
        filterHtml += `<button type="button" class="filter-btn${active}" data-category="${c.name}">${c.name}</button>`;
    });
    // Food is not an activity category: it links to the Eats page
    filterHtml += `<a class="filter-btn text-decoration-none" href="eats.html">Food &amp; Drink &rarr;</a>`;
    $("#activity-filters").html(filterHtml);

    function render() {
        let html = "";
        let shown = 0;
        for (const a of activities) {
            const matchesCategory = currentCategory === "All" || a.category === currentCategory;
            const matchesSearch = (a.name + " " + a.location + " " + a.category).toLowerCase().includes(searchText);
            if (matchesCategory && matchesSearch) {
                const timeLabel = a.category === "Events" ? "When" : "Best time";
                const priceLabel = a.category === "Events" ? "Tickets from" : "From";
                const info = [
                    ["Where", a.location],
                    ["Duration", a.duration],
                    [timeLabel, a.bestTime],
                    ["Bring", a.bring]
                ];
                const footer = `
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold">${priceLabel} $${a.price}</span>
                        <div class="d-flex gap-2">
                            <button type="button" class="btn btn-outline-success btn-sm details-btn" data-id="${a.id}">More info</button>
                            <button type="button" class="btn btn-green btn-sm book-btn" data-id="${a.id}">Book Now</button>
                        </div>
                    </div>`;
                html += buildCard(a, info, footer);
                shown++;
            }
        }
        if (shown === 0) {
            html = '<div class="col-12"><div class="alert alert-warning">No activities match your search. Try something else.</div></div>';
        }
        list.innerHTML = html;
        document.getElementById("activity-count").textContent =
            shown + (shown === 1 ? " activity found" : " activities found") +
            (currentCategory !== "All" ? " in " + currentCategory : "");
    }
    render();

    // jQuery: filter buttons (delegated, so it works after re-rendering)
    $("#activity-filters").on("click", "button.filter-btn", function () {
        $("#activity-filters button.filter-btn").removeClass("active");
        $(this).addClass("active");
        currentCategory = $(this).data("category");
        render();
    });

    // Live search
    document.getElementById("activity-search").addEventListener("input", function (e) {
        searchText = e.target.value.trim().toLowerCase();
        render();
    });

    // Book Now on a card
    $("#activity-list").on("click", ".book-btn", function () {
        startBooking($(this).data("id"));
    });

    // More info: populate the Bootstrap modal
    const modal = new bootstrap.Modal(document.getElementById("activityModal"));
    let modalActivityId = null;
    $("#activity-list").on("click", ".details-btn", function () {
        const a = findActivity($(this).data("id"));
        modalActivityId = a.id;
        $("#activityModalTitle").text(a.name);
        $("#activityModalMeta").text(a.location + " · " + a.duration + " · " + a.category);
        $("#activityModalDesc").text(a.description + " " + a.tips);
        $("#activityModalPrice").text((a.category === "Events" ? "Tickets from $" : "From $") + a.price + " per person");
        modal.show();
    });
    $("#activityModalBook").on("click", function () {
        startBooking(modalActivityId);
    });
}

/* ---------- EATS PAGE ---------- */
function initEats() {
    const list = document.getElementById("eats-list");
    if (!list) return;

    function render(category) {
        let html = "";
        eats.forEach(function (e) {
            if (category === "All" || e.category === category) {
                html += buildCard(e, [["Where", e.location]], '<a href="book.html" class="btn btn-outline-success btn-sm">Plan a visit</a>');
            }
        });
        list.innerHTML = html;
    }
    buildFilters("#eats-filters", eats);
    render("All");

    $("#eats-filters").on("click", ".filter-btn", function () {
        $("#eats-filters .filter-btn").removeClass("active");
        $(this).addClass("active");
        render($(this).data("category"));
    });
}

/* ---------- BOOKING PAGE ---------- */
function initBooking() {
    const form = document.getElementById("booking-form");
    if (!form) return;

    const bookings = [];
    const select = document.getElementById("activity");
    const dateInput = document.getElementById("date");
    const guestsInput = document.getElementById("guests");
    const nameInput = document.getElementById("fullName");
    const estimate = document.getElementById("estimate");
    const summary = document.getElementById("selected-summary");

    // Fill the dropdown, grouped by category
    activityCategories.forEach(function (cat) {
        const group = document.createElement("optgroup");
        group.label = cat.name;
        activities.forEach(function (a) {
            if (a.category === cat.name) {
                const opt = document.createElement("option");
                opt.value = a.id;
                opt.textContent = a.name + " ($" + a.price + " pp)";
                group.appendChild(opt);
            }
        });
        select.appendChild(group);
    });

    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;

    // Show the chosen activity's details above the form
    function updateSummary() {
        const a = findActivity(select.value);
        if (!a) {
            summary.classList.add("d-none");
            return;
        }
        summary.innerHTML = `<strong>${a.name}</strong><br>
            <span class="small">${a.location} · ${a.duration} · ${a.category === "Events" ? "Tickets from" : "From"} $${a.price} per person</span>`;
        summary.classList.remove("d-none");
    }

    function updateEstimate() {
        const a = findActivity(select.value);
        const guests = Number(guestsInput.value);
        estimate.textContent = (a && guests > 0) ? "Estimated total: $" + (a.price * guests) : "";
    }

    select.addEventListener("change", function () { updateSummary(); updateEstimate(); });
    guestsInput.addEventListener("input", updateEstimate);

    // Start the form with the activity chosen via "Book Now"
    let pending = null;
    try {
        pending = JSON.parse(sessionStorage.getItem("pendingBooking"));
        sessionStorage.removeItem("pendingBooking");
    } catch (err) {
        pending = null;
    }
    if (pending && findActivity(pending.activityId)) {
        select.value = pending.activityId;
        updateSummary();
        updateEstimate();
        nameInput.focus();           // cursor lands on the first empty field
    }

    function validate() {
        let ok = true;
        const email = document.getElementById("email");
        const checks = [
            [nameInput, nameInput.value.trim().length >= 2],
            [email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())],
            [select, select.value !== ""],
            [dateInput, dateInput.value !== "" && dateInput.value >= today],
            [guestsInput, Number(guestsInput.value) >= 1 && Number(guestsInput.value) <= 20]
        ];
        checks.forEach(function (pair) {
            pair[0].classList.toggle("is-invalid", !pair[1]);
            pair[0].classList.toggle("is-valid", pair[1]);
            if (!pair[1]) ok = false;
        });
        return ok;
    }

    function renderBookings() {
        const listEl = document.getElementById("booking-list");
        let html = "";
        bookings.forEach(function (b) {
            html += `<li class="list-group-item">
                <div class="fw-bold">${b.activity}</div>
                <div class="small">${b.name} · ${b.date} · ${b.guests} guest${b.guests > 1 ? "s" : ""}</div>
                <div class="small text-muted">${b.transport === "pickup" ? "Hotel pickup" : "Own transport"} · Total $${b.total}</div>
            </li>`;
        });
        listEl.innerHTML = html || '<li class="list-group-item text-muted">No bookings yet.</li>';
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!validate()) {
            showToast("Please fix the highlighted fields.", "danger");
            return;
        }
        const a = findActivity(select.value);
        const guests = Number(guestsInput.value);
        const booking = {
            name: nameInput.value.trim(),
            activity: a.name,
            date: dateInput.value,
            guests: guests,
            transport: document.querySelector('input[name="transport"]:checked').value,
            total: a.price * guests
        };
        bookings.push(booking);
        renderBookings();
        showToast("Thanks " + booking.name + "! Your request for " + a.name + " was received.");
        form.reset();
        form.querySelectorAll(".is-valid, .is-invalid").forEach(function (el) {
            el.classList.remove("is-valid", "is-invalid");
        });
        guestsInput.value = 1;
        updateSummary();
        updateEstimate();
    });
}

/* ---------- NEWSLETTER (home page) ---------- */
function initNewsletter() {
    const nlForm = document.getElementById("newsletter-form");
    if (!nlForm) return;
    nlForm.addEventListener("submit", function (e) {
        e.preventDefault();
        showToast("You're subscribed. Welcome to the Yaad family!");
        nlForm.reset();
    });
}

$(document).ready(function () {
    initActivities();
    initEats();
    initBooking();
    initNewsletter();
});