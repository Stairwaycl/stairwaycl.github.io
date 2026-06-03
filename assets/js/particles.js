tsParticles.load("tsparticles", {
  background: {
    color: { value: "transparent" }
  },
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    links: {
      enable: true,
      color: "#ffffff",
      distance: 150,
      opacity: 0.4
    },
    move: {
      enable: true,
      speed: 2
    },
    opacity: { value: 0.5 },
    size: { value: 3 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" }
    }
  }
});
