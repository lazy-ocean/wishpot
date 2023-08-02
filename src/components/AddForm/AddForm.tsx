import { FormEvent, useState } from "react";
import { getSupabase } from "../../../utils/supabase";
import { Form, Input, Button } from "./AddForm.styled";
import { ImageObject, OgObject } from "open-graph-scraper/dist/lib/types";
import { Wish } from "../../../types";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import { SmallHeading } from "../../theme/typography";

export const AddWishForm = ({
  user,
  setWishes,
}: {
  user: UserProfile;
  setWishes: (arg: Wish) => void;
}) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const supabase = getSupabase(user?.accessToken as string);

    const item = { url: content };
    try {
      const data = await fetch("api/ogs", {
        body: JSON.stringify(item),
        method: "post",
      });
      const res = (await data.json()) as OgObject;

      await supabase.from("items").insert({
        title: res.ogTitle,
        content,
        user_id: user?.sub,
        description: res.ogDescription,
        image: (res.ogImage as ImageObject)?.url || "",
      });
      setContent("");
      setWishes({
        title: res.ogTitle,
        description: res.ogDescription,
        image: (res.ogImage as ImageObject)?.url || "",
        url: content,
      });
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
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="Tell me what you wish for..."
        />
        <Button type="submit">Add</Button>
      </div>
    </Form>
  );
};
