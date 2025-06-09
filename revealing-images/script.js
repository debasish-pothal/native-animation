const $images = document.querySelectorAll(".revealing-img");

$images.forEach(($image) => {
  if (typeof ViewTimeline === "undefined") {
    console.warn("ViewTimeline is not supported in this browser.");
    return;
  }
  $image.animate(
    {
      opacity: [0, 1],
      clipPath: ["inset(45% 20% 45% 20%)", "inset(0% 0% 0% 0%)"],
    },
    {
      fill: "both",
      timeline: new ViewTimeline({
        subject: $image,
      }),
      rangeStart: "entry 25%",
      rangeEnd: "cover 50%",
    }
  );
});
