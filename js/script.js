document.getElementById("roundTripAreaForm").className = "none";
// document.getElementById("roundTripAreaForm").classList.remove = "flex";

// handle one way trip func starts

document
  .getElementById("oneWayTrip")
  .addEventListener("click", function () {
    document
      .getElementById("oneWayTripAreaForm")
      .classList.add(
        "from-destination-date-area",
        "flex",
        "justify-between"
      );

    document.getElementById("roundTripAreaForm").className = "none";
  });

// handle round trip function starts

document
  .getElementById("roundTrip")
  .addEventListener("click", function () {
    document.getElementById("oneWayTripAreaForm").className = "none";

    document.getElementById("roundTripAreaForm").classList.remove("none");
    document
      .getElementById("roundTripAreaForm")
      .classList.add(
        "from-destination-date-area",
        "flex",
        "justify-between"
      );
  });