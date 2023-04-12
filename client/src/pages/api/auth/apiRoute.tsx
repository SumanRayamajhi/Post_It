// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { useSession } from "next-auth/react";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { data: session } = useSession();
    if (!session)
      return res.status(401).json({ message: "Please sign in first" });

    const title: string = req.body.title;

    if (title.length > 300)
      return res.status(403).json({ message: "title is too long" });
    if (title.length) {
      return res.status(403).json({ message: "title is empty" });
    }
    try {
    } catch (error) {
      console.error(error);
    }
  }
}
