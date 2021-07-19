import { StyledInput, StyledSearchContainter } from "./StyledSearchCustomer";

type Props = {
  value: string;
  update: (searchValue: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchCustomer: React.FC<Props> = ({ update, value }) => {
  return (
    <StyledSearchContainter>
      <StyledInput
        placeholder="Search Customer..."
        onChange={(e) => update(e)}
        value={value}
      />
    </StyledSearchContainter>
  );
};
