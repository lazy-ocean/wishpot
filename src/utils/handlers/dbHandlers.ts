import { getSupabase } from "../../../utils/supabase";

// TODO: OOP style handler
export const addNewWishToDB = async ({ data, user }) => {
  const supabase = getSupabase(user?.accessToken as string);
  try {
    await supabase.from("items").insert(data);
  } catch (e) {
    throw new Error("Something went wrong, please try again");
  }
};

export const deleteWishFromDB = async ({ id, user }) => {
  const supabase = getSupabase(user?.accessToken as string);
  try {
    await supabase.from("items").delete().eq("id", id);
  } catch (e) {
    throw new Error("Something went wrong, please try again");
  }
};
