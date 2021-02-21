import axios from 'axios';
import { validate } from 'deep-email-validator';
import type { NextApiRequest, NextApiResponse } from 'next';

async function isEmail(email?: string): Promise<boolean> {
  if (!email) return false;

  const result = await validate({
    email: email,
    validateRegex: true,
    validateMx: true,
    validateTypo: false,
    validateDisposable: true,
    validateSMTP: false
  });

  return result.valid;
}
interface BetaListRequest extends NextApiRequest {
  body: {
    email?: string;
    name?: string;
  };
}

export default async (req: BetaListRequest, res: NextApiResponse) => {
  const { email, name } = req.body;
  const isValidEmail = await isEmail(email);

  if (req.method === 'POST') {
    try {
      if (!isValidEmail)
        return res.status(400).json({ message: 'Email validation failed' });

      const response = await axios.post(
        'https://api.airtable.com/v0/appeG8pmFyb2DYA5Q/Table%201',
        {
          fields: {
            Email: email,
            Name: name ? name : ''
          }
        },
        { headers: { Authorization: `Bearer ${process.env.AIRTABLE_KEY}` } }
      );
      return res.status(201).send('');
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  } else {
    return res.status(405).json({ message: 'Unsupported HTTP method' });
  }
};
