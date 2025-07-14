let friends = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(friends);
  } else if (req.method === 'POST') {
    const { name } = req.body;
    if (typeof name === 'string' && name.trim() !== '') {
      friends.push(name.trim());
      res.status(201).json({ message: 'Friend added' });
    } else {
      res.status(400).json({ error: 'Invalid name' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
