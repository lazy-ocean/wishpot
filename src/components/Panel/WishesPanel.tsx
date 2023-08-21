import { Wish } from "../../../types";
import { SubHeading } from "../../theme/typography";
import Card from "../Card/Card";
import { Cards } from "../Card/card.styled";
import { Grid } from "./WishesPanel.styled";

export const WishesPanel = ({ wishes }: { wishes: Wish[] }) => {
  return (
    <Cards>
      <SubHeading>People wished for:</SubHeading>
      <Grid>
        {wishes.map((wish) => (
          <Card item={wish} key={wish.id} />
        ))}
      </Grid>
    </Cards>
  );
};
