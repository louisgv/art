export function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ number: between(10, 200) });
  }
}
