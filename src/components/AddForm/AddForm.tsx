import { FormEvent, useState } from "react";

import { Form, Input } from "./AddForm.styled";
import { ImageObject, OgObject } from "open-graph-scraper/dist/lib/types";
import { Wish } from "../../../types";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import { SmallHeading } from "../../theme/typography";
import { Button } from "../Button/Button";
import { addNewWishToDB } from "../../utils/handlers/dbHandlers";

export const AddWishForm = ({
  user,
  setWishes,
}: {
  user: UserProfile;
  setWishes: (arg: Wish) => void;
}) => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await fetch("api/ogs", {
        body: JSON.stringify({ url }),
        method: "post",
      });
      const res = (await data.json()) as OgObject;
      const id = crypto.randomUUID();
      const newWish = {
        title: res.ogTitle,
        description: res.ogDescription,
        image: (res.ogImage as ImageObject)?.url || "",
        url,
        id,
      };
      await addNewWishToDB({ data: { ...newWish, user_id: user?.sub }, user });
      setUrl("");
      setWishes(newWish);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SmallHeading as="label" htmlFor="wishform">
        Enter a URL to the product you dream about:
      </SmallHeading>
      <div>
        <Input
          id="wishform"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          placeholder="Tell me what you wish for..."
        />
        <Button type="submit" label="Add" />
      </div>
    </Form>
  );
};
