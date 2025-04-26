let jobs = [
  { id: 1, title: 'Software Engineer', description: 'Develop software applications' },
  { id: 2, title: 'Product Manager', description: 'Manage product lifecycle' },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Return all jobs
    res.status(200).json(jobs);
  } else if (req.method === 'POST') {
    // Add a new job
    const { title, description } = req.body;
    const newJob = { id: jobs.length + 1, title, description };
    jobs.push(newJob);
    res.status(201).json(newJob);
  } else if (req.method === 'PUT') {
    // Update a job
    const { id, title, description } = req.body;
    const jobIndex = jobs.findIndex(job => job.id === id);
    if (jobIndex === -1) {
      return res.status(404).json({ message: 'Job not found' });
    }
    jobs[jobIndex] = { id, title, description };
    res.status(200).json(jobs[jobIndex]);
  } else if (req.method === 'DELETE') {
    // Delete a job
    const { id } = req.body;
    jobs = jobs.filter(job => job.id !== id);
    res.status(200).json({ message: 'Job deleted' });
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
