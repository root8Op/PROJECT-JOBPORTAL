import { users } from '../../../data/users'; // example user data, can be replaced with DB

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password, action } = req.body;

    if (action === 'register') {
      // Simple registration logic (no DB)
      const userExists = users.find(u => u.username === username);
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
      users.push({ username, password });
      return res.status(201).json({ message: 'User registered successfully' });
    } else if (action === 'login') {
      // Simple login logic
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        return res.status(200).json({ message: 'Login successful' });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
