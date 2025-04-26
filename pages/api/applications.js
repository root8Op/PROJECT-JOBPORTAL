let applications = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { jobId, applicantName, applicantEmail, resume } = req.body;
    const newApplication = {
      id: applications.length + 1,
      jobId,
      applicantName,
      applicantEmail,
      resume,
      status: 'submitted',
    };
    applications.push(newApplication);
    res.status(201).json({ message: 'Application submitted', application: newApplication });
  } else if (req.method === 'GET') {
    res.status(200).json(applications);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
