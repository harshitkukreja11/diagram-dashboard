export const getComponents = () => {
  return Promise.resolve([
    { id: 1, name: "Resistor", x: 120, y: 80, w: 80, h: 30 },
    { id: 2, name: "Capacitor", x: 260, y: 140, w: 60, h: 40 },
    { id: 3, name: "Diode", x: 180, y: 240, w: 70, h: 35 },
    { id: 4, name: "Transistor", x: 340, y: 200, w: 90, h: 50 }
  ]);
};