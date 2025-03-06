import data from '../../../db.json';

function handler(req, res) {
  res.status(200).json(data);
}

export default handler;